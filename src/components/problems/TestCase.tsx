'use client'
import React, {useState, useEffect} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/react";
import { Suspense } from "react";
import Image from "next/image";

const TestCase = () => {
    const searchParams = useSearchParams()

    const [testCaseInputs, setTestCaseInputs] = useState([""]);
    const [testCaseOutputs, setTestCaseOutputs] = useState([""]);

    const [editedTestCaseData, setEditedTestCaseData] = useState({
        id: "",
        problem_id: "",
        input: "",
        output: "",
      });

      const [testCaseInputError, setTestCaseInputError] = useState("");
      const [testCaseOutputError, setTestCaseOutputError] = useState("");
      const [editingTestCaseId, setEditingTestCaseId] = useState(null);
      const [editingProblemId, setEditingProblemId] = useState(null);
      

      const router = useRouter();

      // Get the newly created problem id

      const problemId = searchParams.get("problem_id");
      
      //   Get test case ID
      useEffect(() => {
        const pathArray = window.location.pathname.split("/");
        const idFromUrlTestCase = pathArray[pathArray.length - 1];
        const idFromUrlProblem= pathArray[pathArray.length - 3];
        
        setEditingTestCaseId(idFromUrlTestCase);
        setEditingProblemId(idFromUrlProblem)
      }, []);


      // get test case data when editing
      useEffect(() => {
        if (editingTestCaseId !== null && editingTestCaseId !== 'testcase') {
          const fetchData = async () => {
            try {
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/test_case/${editingTestCaseId}`
              );
              console.log({ editingTestCaseId });
              if (!response.ok) {
                console.error(
                  `Failed to fetch test case data with ID ${editingTestCaseId}. Server error.`
                );
                return;
              }
      
              const data = await response.json();
      
              setEditedTestCaseData({
                id: data.id,
                problem_id: data.problem_id,
                input: data.input,
                output: data.output,
              });
      
              const countNewlinesInput = (data.input.match(/\n/g) || []).length;
              const countNewlinesOutput = (data.output.match(/\n/g) || []).length;
      
              const maxLines = Math.max(countNewlinesInput, countNewlinesOutput);
      
              const inputLines = data.input.split("\n");
              const outputLines = data.output.split("\n");
      
              setTestCaseInputs(Array.from({ length: maxLines + 1 }, (_, i) => inputLines[i] || ""));
              setTestCaseOutputs(Array.from({ length: maxLines + 1 }, (_, i) => outputLines[i] || ""));
            } catch (error) {
              console.error(`Error fetching test data with ID ${editingTestCaseId}`, error);
            }
          };
          fetchData();
        }
      }, [editingTestCaseId]);
      

      // Make a test case
    const handleCreateTestCase = async () => {
        setTestCaseInputError("");
        setTestCaseOutputError("");

        if (!editedTestCaseData.input) {
            setTestCaseInputError("Test Case Input must be filled");
            return;
        }

        if (!editedTestCaseData.output) {
            setTestCaseOutputError("Test Case Output must be filled");
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/test_case`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...editedTestCaseData,
                    problem_id: problemId
                })
            })

            if (response.status === 200) {
                router.push('/admin/problems')
            } else {
                const errorData = await response.json();
                console.log(`Failed to create test case: ${errorData}`)
            }
        } catch (error) {
            console.log(`Failed to create test case: ${error}`)
        }
    }


    // edit test case
    const handleEditTestCase = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/test_case/${editingTestCaseId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...editedTestCaseData,
                problem_id: editingProblemId
              }),
            }
            );
    
          if (response.status === 200) {
            router.push("/admin/problems");
          } else {
            const errorData = await response.json();
            console.log(
              `Failed to edit with ID ${editingTestCaseId}. Server error: ${errorData.message}`
            );
          }
        } catch (error) {
          console.error(`Error editing test case with IDs ${editingTestCaseId}`, error);
        }
      };


     // Add new inputs and outputs to the testcase
     const handleAddTestCase = () => {
        setTestCaseInputs([...testCaseInputs, ""]);
        setTestCaseOutputs([...testCaseOutputs, ""]);
      };

      // Delete inputs and outputs in the testcase
      const handleRemoveTestCase = () => {
        if (testCaseInputs.length > 1) {
          const newInputs = [...testCaseInputs];
          const newOutputs = [...testCaseOutputs];
          newInputs.pop();
          newOutputs.pop();
          setTestCaseInputs(newInputs);
          setTestCaseOutputs(newOutputs);
    
          setEditedTestCaseData((prevData) => ({
            ...prevData,
            input: newInputs.join("\n"),
            output: newOutputs.join("\n"),
          }));
        }
      };

          // Update input output based on index
          const handleInputChange = (index:any, value:any, isInput:any) => {
            if (isInput) {
              const newInputs = [...testCaseInputs];
              newInputs[index] = value;
              setTestCaseInputs(newInputs);
        
              setEditedTestCaseData((prevData) => ({
                ...prevData,
                input: newInputs.join("\n"),
              }));
            } else {
              const newOutputs = [...testCaseOutputs];
              newOutputs[index] = value;
              setTestCaseOutputs(newOutputs);
        
              setEditedTestCaseData((prevData) => ({
                ...prevData,
                output: newOutputs.join("\n"),
              }));
            }
          };

          const Loading = (): React.ReactNode => {
            return (
              <Button>
                <Image alt="Back" src="/assets/icons/left.svg" width={30} height={30} className="hover:opacity-65" />
              </Button>
            );
          }
          
    return (
     <div className="mt-20">
        <Button className="mb-4" onPress={() => editedTestCaseData.id ? router.push(`/admin/problems/edit/${editedTestCaseData.problem_id}`) : router.push(`/admin/problems/edit/${problemId}`)}>
          <Image alt="Back" src="/assets/icons/left.svg" width={30} height={30} className="hover:opacity-65" />
        </Button>
       <h1 className="text-3xl font-bold lg:text-4xl">
          <span className="underline decoration-blue-500">
              {editedTestCaseData.id ? "Edit Test Case" : "Create Test Case"}
          </span>
      </h1>
        <form action="">
            <label className="block mt-4 mb-1">Test Case</label>
            <div className="gap-4 flex">
                <div className=" w-full">
                    {testCaseInputs.map((input, index) => (
                    <div key={index} className="flex w-full gap-x-6">
                        <div className="w-full">
                        {index === 0 && <label className="block mb-1">Input</label>}
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => handleInputChange(index, e.target.value, true)}
                            className="w-full p-2 border my-1"
                        />
                                { testCaseInputError && <p className="text-red-500">{testCaseInputError}</p> }
                        </div>
                        <div className="w-full">
                        {index === 0 && <label className="block mb-1">Output</label>}
                        <input
                            type="text"
                            value={testCaseOutputs[index]}
                            onChange={(e) => handleInputChange(index, e.target.value, false)}
                            className="w-full p-2 border my-1" required
                            />
                                {testCaseOutputError && <p className="text-red-500">{testCaseOutputError}</p> }
                        </div>
                        
                    </div>
                    ))}
                </div>
                <div className="flex-row gap-2 flex mt-10 mr-10 text-white">
                    <button
                    type="button"
                    onClick={handleAddTestCase}
                    className="bg-black px-4 h-fit hover:opacity-70 rounded-sm"
                    >
                    +
                    </button>
                    <button
                    type="button"
                    onClick={handleRemoveTestCase}
                    className="bg-black px-4 h-fit hover:opacity-70 rounded-sm"
                    >
                    -
                    </button>
                </div>
            </div>
            <div className="flex justify-end ">
                <Button
                    onPress={() => {
                        editedTestCaseData.id ? handleEditTestCase() : handleCreateTestCase();
                    }}
                    className="bg-black text-white px-3 py-2 mt-6 hover:opacity-60 mr-8 rounded-md"
                    >
                    {editedTestCaseData.id ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    </div>
  );
};

export default TestCase;
