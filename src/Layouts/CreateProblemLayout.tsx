'use client'
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, {useState, useEffect} from "react";


const AdminCreateProblem = () => {
    const [sampleInputs, setSampleInputs] = useState([""]);
    const [sampleOutputs, setSampleOutputs] = useState([""]);
    const [editingProblemsId, setEditingProblemsId] = useState(null);
    const [editedProblemsData, setEditedProblemsData] = useState({
      id: "",
      title: "",
      description: "",
      time_limit: "",
      memory_limit: "",
      sample_input: "",
      input_format: "",
      sample_output: "",
      output_format: "",
      constraints: "",
      explanation: "",
    });
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [testCase, setTestCase] = useState([]);
    
    const [originalSelectedCategories, setOriginalSelectedCategories] = useState([]);

    // Input handling
    const [titleError, setTitleError] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [timeLimitError, setTimeLimitError] = useState("");
    const [memoryLimitError, setMemoryLimitError] = useState("");
    const [inputFormatError, setInputFormatError] = useState("");
    const [outputFormatError, setOutputFormatError] = useState("");
    const [sampleInputError, setSampleInputError] = useState("");
    const [sampleOutputError, setSampleOutputError] = useState("");
    const [constraintError, setConstraintError] = useState("");
    const [explanationError, setExplanationError] = useState("");
    const [categoriesError, setCategoriesError] = useState("");
    

    const router = useRouter();
  
    // Get the problem ID
    useEffect(() => {
      const pathArray = window.location.pathname.split("/");
      const idFromUrl = pathArray[pathArray.length - 1];
  
      setEditingProblemsId(idFromUrl);
    }, []);
  

    // get problem data
    useEffect(() => {
      if (editingProblemsId !== null && editingProblemsId !== 'create') {
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
              input_format: data.input_format,
              sample_output: data.sample_output,
              output_format: data.output_format,
              constraints: data.constraints,
              explanation: data.explanation,
            });

            setOriginalSelectedCategories(data.categories.map((category: { id: any; }) => category.id));

            const countNewlinesInput = (data.sample_input.match(/\n/g) || []).length;
            const countNewlinesOutput = (data.sample_output.match(/\n/g) || []).length;

            const maxLines = Math.max(countNewlinesInput, countNewlinesOutput);

            const inputLines = data.sample_input.split("\n");
            const outputLines = data.sample_output.split("\n");

            setSampleInputs(Array.from({ length: maxLines + 1 }, (_, i) => inputLines[i] || ""));
            setSampleOutputs(Array.from({ length: maxLines + 1 }, (_, i) => outputLines[i] || ""));
            setSelectedCategories(data.categories.map((category:any) => category.id));
          } catch (error) {
            console.error(`Error fetching problem data with ID ${editingProblemsId}`, error);
          }
        };
        fetchData();
      }
    }, [editingProblemsId]);


    // get categories data
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories`);
          const data = await response.json();
          setCategories(data);
        } catch (error) {
          console.error('Error fetching category', error);
        }
      }
      fetchCategories();
    }, []);

    // test case to get id test cases
    useEffect(() => {
      const fetchTestCase = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/test_cases`);
          const data = await response.json();
          setTestCase(data);

        } catch (error) {
          console.log("Fetched Test Case:", error);
        }
    
      }
      fetchTestCase()
    }, []);
    
    
    // Make a problem
    const handleCreateProblem = async () => {
      setTitleError("");
      setDescriptionError("");
      setTimeLimitError("");
      setMemoryLimitError("");
      setSampleInputError("");
      setSampleOutputError("");
      setInputFormatError("");
      setOutputFormatError("");
      setConstraintError("");
      setExplanationError("");
      setCategoriesError("");

      if (!editedProblemsData.title) {
        setTitleError("Title must be filled");
        return;
      }
      if (!editedProblemsData.description) {
        setDescriptionError("Description must be filled");
        return;
      }
      if (!editedProblemsData.time_limit) {
        setTimeLimitError("Time limit must be filled");
        return;
      }
      if (!editedProblemsData.memory_limit) {
        setMemoryLimitError("Memory limit must be filled");
        return;
      }
      
      if (!editedProblemsData.input_format) {
        setInputFormatError("Input format must be filled");
        return;
      }
      if (!editedProblemsData.output_format) {
        setOutputFormatError("Output format must be filled");
        return;
      }
      if (!editedProblemsData.constraints) {
        setConstraintError("Constraint must be filled");
        return;
      }
      if (!editedProblemsData.explanation) {
        setExplanationError("Explanation must be filled");
        return;
      }
      if (!editedProblemsData.sample_input) {
        setSampleInputError("Sample input must be filled");
        return;
      }
      if (!editedProblemsData.sample_output) {
        setSampleOutputError("Sample output must be filled");
        return;
      }
      if (!selectedCategories || selectedCategories.length === 0) {
        setCategoriesError("Please select at least one category.");
        return;
      }
      
        try {
          const problemResponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problem`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...editedProblemsData,
            }),
          });
      
          if (problemResponse.status === 200) {
            const newProblemData = await problemResponse.json();
            const newProblemId = newProblemData.data.id

            if (!selectedCategories || selectedCategories.length === 0) {
              console.warn("No categories selected for the problem.");
              return;
            }

            for (const categoryId of selectedCategories) {
              const addCategoryResponse = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problems/${newProblemId}/categories/${categoryId}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              if (addCategoryResponse.status === 200) {
                console.log(`Category ${categoryId} added successfully to problem ${newProblemId}`);
              } else {
                const errorData = await addCategoryResponse.json();
                console.log(`Failed to add category. Server error: ${JSON.stringify(errorData)}`);
              }
            }
            router.push(`/admin/problems/create/testcase?problem_id=${newProblemId}`);

          } else {
            const errorData = await problemResponse.json();
            console.log(`Failed to create problem. Server error: ${JSON.stringify(errorData)}`);
          }
        } catch (error) {
          console.log("Error creating problem", error);
        }
      };

    // edit problem
    const handleEditProblem = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problem/${editingProblemsId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...editedProblemsData,
            }),
          }
        );
    
        if (response.status === 200) {
          const editingProblemsIdNumber = parseInt(editingProblemsId, 10);
    
          if (!selectedCategories || selectedCategories.length === 0) {
            console.warn("No categories selected for the problem.");
            return;
          }
          for (const categoryId of selectedCategories) {
            if (!originalSelectedCategories.includes(categoryId)) {
              const addCategoryResponse = await fetch(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problems/${editingProblemsId}/categories/${categoryId}`,
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
      
              if (addCategoryResponse.status === 200) {
                console.log(`Category ${categoryId} added successfully to problem ${editingProblemsId}`);
              } else {
                const errorData = await addCategoryResponse.json();
                console.log(`Failed to add category. Server error: ${JSON.stringify(errorData)}`);
              }
            }
          }
    
          const categoriesToBeRemoved = originalSelectedCategories.filter(
            (categoryId) => !selectedCategories.includes(categoryId)
          );
    
          // Remove categories unchecked
          for (const categoryId of categoriesToBeRemoved) {
            const removeCategoryResponse = await fetch(
              `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/problems/${editingProblemsId}/categories/${categoryId}`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
    
            if (removeCategoryResponse.status === 200) {
              console.log(`Category ${categoryId} removed successfully from problem ${editingProblemsId}`);
            } else {
              const errorData = await removeCategoryResponse.json();
              console.log(`Failed to remove category. Server error: ${JSON.stringify(errorData)}`);
            }
          }
    
          const matchingTestCase = testCase.find(
            (testCase) => testCase.problem_id === editingProblemsIdNumber
          );
    
          if (matchingTestCase) {
            const correspondingTestCaseId = matchingTestCase.id;
            router.push(`/admin/problems/edit/${editingProblemsId}/testcase/${correspondingTestCaseId}`);
          } else {
            router.push(`/admin/problems/create/testcase?problem_id=${editingProblemsId}`);
          }
        } else {
          const errorData = await response.json();
          console.log(`Failed to edit with ID ${editingProblemsId}. Server error: ${errorData.message}`);
        }
    
      } catch (error) {
        console.log(`Error editing problem with ID ${editingProblemsId}`, error);
      }
    };
    
    

      // Add new inputs and outputs to the testcase
      const handleAddSample = () => {
          setSampleInputs([...sampleInputs, ""]);
          setSampleOutputs([...sampleOutputs, ""]);
        };
    
      // Delete inputs and outputs in the sample
      const handleRemoveSample = () => {
        if (sampleInputs.length > 1) {
          const newInputs = [...sampleInputs];
          const newOutputs = [...sampleOutputs];
          newInputs.pop();
          newOutputs.pop();
          setSampleInputs(newInputs);
          setSampleOutputs(newOutputs);
    
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
          const newInputs = [...sampleInputs];
          newInputs[index] = value;
          setSampleInputs(newInputs);
    
          setEditedProblemsData((prevData) => ({
            ...prevData,
            sample_input: newInputs.join("\n"),
          }));
        } else {
          const newOutputs = [...sampleOutputs];
          newOutputs[index] = value;
          setSampleOutputs(newOutputs);
    
          setEditedProblemsData((prevData) => ({
            ...prevData,
            sample_output: newOutputs.join("\n"),
          }));
        }
      };

      // edit category
      const handleCategoryChange = (categoryId:any) => {
        setSelectedCategories((prevCategories) => {
          if (prevCategories.includes(categoryId)) {
            return prevCategories.filter((id) => id !== categoryId);
          } else {
            return [...prevCategories, categoryId];
          }
        });
      };
      
    return (
        <div className="mt-20">
            <h1 className="text-3xl font-bold lg:text-4xl">
                <span className="underline decoration-blue-500">
                  {editedProblemsData.id? "Edit Problem": "Create Problem"}</span>
            </h1>
            <form action="" className="">
                <div className="my-4">
                <label className="block mb-1">Title</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={editedProblemsData.title}
                    onChange={(e) => setEditedProblemsData({ ...editedProblemsData, title: e.target.value })}
                    className="w-full p-2 border" required
                />
                { titleError && <p className="text-red-500">{titleError}</p> }
                </div>
                <div className=" mb-3">
                  <label>Categories:</label>
                  <div className="grid grid-cols-3 mt-1 mb-2">
                  {categories.map((category) => (
                      <div key={category.id}>
                        <input
                          type="checkbox"
                          id={`category-${category.id}`}
                          checked={selectedCategories.includes(category.id)}
                          onChange={() => handleCategoryChange(category.id)}
                        />
                        <label htmlFor={`category-${category.id}`}>{category.name}</label>
                      </div>
                    ))}
                  </div>
                  {categoriesError && <p className="text-red-500">{categoriesError}</p> }
                </div>
                <div className="mb-4">
                <label className="block mb-1">Description</label>
                <textarea
                    name=""
                    id=""
                    className="w-full p-2 border"
                    rows={3}
                    value={editedProblemsData.description}
                    onChange={(e) => setEditedProblemsData({ ...editedProblemsData, description: e.target.value })} required
                    />
                    {descriptionError && <p className="text-red-500">{descriptionError}</p> }
                </div>
    
                <div className="mb-4">
                <label className="block mb-1">Time Limit</label>
                <input
                    type="number"
                    name=""
                    id=""
                    placeholder="0"
                    className="w-full p-2 border"
                    value={editedProblemsData.time_limit}
                    onChange={(e) => setEditedProblemsData({ ...editedProblemsData, time_limit: (e.target.value) })} required
                />
                 { timeLimitError && <p className="text-red-500">{timeLimitError}</p> }
                </div>
    
                <div className="mb-4">
                <label className="block mb-1">Memory Limit</label>
                <input
                    type="number"
                    placeholder="0"
                    name=""
                    id=""
                    className="w-full p-2 border"
                    value={editedProblemsData.memory_limit}
                    onChange={(e) => setEditedProblemsData({ ...editedProblemsData, memory_limit: (e.target.value) })} required
                />
                 { memoryLimitError && <p className="text-red-500">{memoryLimitError}</p> }
                </div>
                <div className="mb-4">
                <label className="block mb-1">Input Format</label>
                <input
                    type="text"
                    name=""
                    id=""
                    className="w-full p-2 border"
                    value={editedProblemsData.input_format}
                    onChange={(e) => setEditedProblemsData({ ...editedProblemsData, input_format: e.target.value })} required
                />
                 { inputFormatError && <p className="text-red-500">{inputFormatError}</p> }
                </div>
                <div className="mb-4">
                <label className="block mb-1">Output Format</label>
                <input
                    type="text"
                    name=""
                    id=""
                    className="w-full p-2 border"
                    value={editedProblemsData.output_format}
                    onChange={(e) => setEditedProblemsData({ ...editedProblemsData, output_format: e.target.value })} required
                />
                 { outputFormatError && <p className="text-red-500">{outputFormatError}</p> }
                </div>

                <div className="mb-4">
                <label className="block mb-1">Constraint</label>
                <input
                    type="text"
                    name=""
                    id=""
                    className="w-full p-2 border"
                    value={editedProblemsData.constraints}
                    onChange={(e) => setEditedProblemsData({ ...editedProblemsData, constraints: e.target.value })} required
                />
                 { constraintError && <p className="text-red-500">{constraintError}</p> }
                </div>
                <div className="mb-4">
                <label className="block mb-1">Explanation</label>
                <input
                    type="text"
                    name=""
                    id=""
                    className="w-full p-2 border"
                    value={editedProblemsData.explanation}
                    onChange={(e) => setEditedProblemsData({ ...editedProblemsData, explanation: e.target.value })} required
                />
                 { explanationError && <p className="text-red-500">{explanationError}</p> }
                </div>
                <label className="block mb-1">Samples</label>
                <div className="gap-4 flex">
                <div className=" w-full">
                    {sampleInputs.map((input, index) => (
                    <div key={index} className="flex w-full gap-x-6">
                        <div className="w-full">
                        {index === 0 && <label className="block mb-1">Input</label>}
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => handleInputChange(index, e.target.value, true)}
                            className="w-full p-2 border my-1"
                        />
                               { sampleInputError && <p className="text-red-500">{sampleInputError}</p> }
                        </div>
                      
                        <div className="w-full">
                        {index === 0 && <label className="block mb-1">Output</label>}
                        <input
                            type="text"
                            value={sampleOutputs[index]}
                            onChange={(e) => handleInputChange(index, e.target.value, false)}
                            className="w-full p-2 border my-1" required
                            />
                                { sampleOutputError && <p className="text-red-500">{sampleOutputError}</p> }
                        </div>
                       
                    </div>
                    ))}
                </div>
                <div className="flex-row gap-2 flex mt-10 mr-10 text-white">
                    <button
                    type="button"
                    onClick={handleAddSample}
                    className="bg-black px-4 h-fit hover:opacity-70 rounded-sm"
                    >
                    +
                    </button>
                    <button
                    type="button"
                    onClick={handleRemoveSample}
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
                    className="bg-black text-white px-5 py-2 mt-6 hover:opacity-60 mr-8 rounded-md"
                    >
                      Next
                    </Button>
                </div>
            </form>
        </div>
    );
  };
  
export default AdminCreateProblem;
