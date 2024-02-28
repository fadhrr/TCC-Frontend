'use client'
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, {useState, useEffect} from "react";

const AdminCreateProblem = () => {
    const [testCaseInputs, setTestCaseInputs] = useState([""]);
    const [testCaseOutputs, setTestCaseOutputs] = useState([]);
  
    const [editingProblemsId, setEditingProblemsId] = useState(null);
    const [editedProblemsData, setEditedProblemsData] = useState({
      id: "",
      title: "",
      description: "",
      time_limit: 0,
      memory_limit: 0,
      sample_input: "",
      sample_output: "",
    });
  
    const router = useRouter();
  
    // Get the problem ID
    useEffect(() => {
      const pathArray = window.location.pathname.split("/");
      const idFromUrl = pathArray[pathArray.length - 1];
  
      setEditingProblemsId(idFromUrl);
    }, []);
  
    //Data defaults when making edits
    useEffect(() => {
      if (editingProblemsId !== null) {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problem/${editingProblemsId}`
            );
            if (!response.ok) {
              console.error(
                `Failed to fetch problem data with ID ${editingProblemsId}. Server error.`
              );
              return;
            }
  
            const data = await response.json();
  
            setEditedProblemsData({
              id: data.id,
              title: data.title,
              description: data.description,
              time_limit: data.time_limit,
              memory_limit: data.memory_limit,
              sample_input: data.sample_input,
              sample_output: data.sample_output,
            });
  
            const countNewlinesInput = (data.sample_input.match(/\n/g) || []).length;
            const countNewlinesOutput = (data.sample_output.match(/\n/g) || []).length;
  
            const maxLines = Math.max(countNewlinesInput, countNewlinesOutput);
  
            const inputLines = data.sample_input.split("\n");
            const outputLines = data.sample_output.split("\n");
  
            setTestCaseInputs(Array.from({ length: maxLines + 1 }, (_, i) => inputLines[i] || ""));
            setTestCaseOutputs(Array.from({ length: maxLines + 1 }, (_, i) => outputLines[i] || ""));
          } catch (error) {
            console.error(`Error fetching problem data with ID ${editingProblemsId}`, error);
          }
        };
        fetchData();
      }
    }, [editingProblemsId]);
  
    
    // Make a problem
    const handleCreateProblem = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problem`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...editedProblemsData,
                input_format: "",
                output_format: "",
                constraints: "",
        
            }),
          });
      
          if (response.status === 200) {
            router.push("/admin/problems");
          } else {
            const errorData = await response.json();
            console.log(`Failed to create problem. Server error: ${JSON.stringify(errorData)}`);
          }
        } catch (error) {
          console.log("Error creating problem", error);
        }
      };
  
    //   Edit the problem
    const handleEditProblem = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problem/${editingProblemsId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProblemsData),
          }
        );
  
        if (response.status === 200) {
          router.push("/admin/problems");
        } else {
          const errorData = await response.json();
          console.log(
            `Failed to edit with ID ${editingProblemsId}. Server error: ${errorData.message}`
          );
        }
      } catch (error) {
        console.log(`Error editing problem with ID ${editingProblemsId}`, error);
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
    
          setEditedProblemsData((prevData) => ({
            ...prevData,
            sample_input: newInputs.join("\n"),
            sample_output: newOutputs.join("\n"),
          }));
        }
      };
    
      // Update input output based on index
      const handleInputChange = (index:any, value:any, isInput:any) => {
        if (isInput) {
          const newInputs = [...testCaseInputs];
          newInputs[index] = value;
          setTestCaseInputs(newInputs);
    
          setEditedProblemsData((prevData) => ({
            ...prevData,
            sample_input: newInputs.join("\n"),
          }));
        } else {
          const newOutputs = [...testCaseOutputs];
          newOutputs[index] = value;
          setTestCaseOutputs(newOutputs);
    
          setEditedProblemsData((prevData) => ({
            ...prevData,
            sample_output: newOutputs.join("\n"),
          }));
        }
      };
  
    return (
        <div className="mt-28">
            <h1 className="text-3xl font-bold lg:text-4xl">
                <span className="underline decoration-blue-500">Create Problem</span>
            </h1>
            <form action="" className="">
                <div className="my-4">
                <label className="block mb-1">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={editedProblemsData.title}
                    onChange={(e) => setEditedProblemsData({ ...editedProblemsData, title: e.target.value })}
                    className="w-full p-2 border"
                />
                </div>
    
                <div className="mb-4">
                <label className="block mb-1">Category</label>
                <textarea
                    name=""
                    id=""
                    className="w-full p-2 border"
                    rows={3}
                    value={editedProblemsData.description}
                    onChange={(e) => setEditedProblemsData({ ...editedProblemsData, description: e.target.value })}
                    />
                </div>
    
                <div className="mb-4">
                <label className="block mb-1">Time Limit</label>
                <input
                    type="number"
                    name=""
                    id=""
                    className="w-full p-2 border"
                    value={editedProblemsData.time_limit}
                    onChange={(e) => setEditedProblemsData({ ...editedProblemsData, time_limit: parseInt(e.target.value) })}
                />
                </div>
    
                <div className="mb-4">
                <label className="block mb-1">Memori Limit</label>
                <input
                    type="number"
                    name=""
                    id=""
                    className="w-full p-2 border"
                    value={editedProblemsData.memory_limit}
                    onChange={(e) => setEditedProblemsData({ ...editedProblemsData, memory_limit: parseInt(e.target.value) })}
                />
                </div>
                <label className="block mb-1">Test Case</label>
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
                        </div>
                        <div className="w-full">
                        {index === 0 && <label className="block mb-1">Output</label>}
                        <input
                            type="text"
                            value={testCaseOutputs[index]}
                            onChange={(e) => handleInputChange(index, e.target.value, false)}
                            className="w-full p-2 border my-1"
                        />
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
                        editedProblemsData.id ? handleEditProblem() : handleCreateProblem();
                    }}
                    className="bg-black text-white px-3 py-2 mt-6 hover:opacity-60 mr-8 rounded-md"
                    >
                    {editedProblemsData.id ? "Update" : "Submit"}
                    </Button>

                </div>
            </form>
        </div>
    );
  };
  
export default AdminCreateProblem;
