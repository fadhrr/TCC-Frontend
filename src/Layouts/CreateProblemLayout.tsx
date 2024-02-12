'use client'
import React, {useState} from "react";


const AdminCreateProblem = () => {
const [testCaseInputs, setTestCaseInputs] = useState([""]);
    const [testCaseOutputs, setTestCaseOutputs] = useState([""]);

    const handleAddTestCase = () => {
        setTestCaseInputs([...testCaseInputs, ""]);
        setTestCaseOutputs([...testCaseOutputs, ""]);
    };

    const handleRemoveTestCase = () => {
        if (testCaseInputs.length > 1) {
        const newInputs = [...testCaseInputs];
        const newOutputs = [...testCaseOutputs];
        newInputs.pop();
        newOutputs.pop();
        setTestCaseInputs(newInputs);
        setTestCaseOutputs(newOutputs);
        }
    };

    const handleInputChange = (index:any, value:any, isInput:any) => {
        if (isInput) {
        const newInputs = [...testCaseInputs];
        newInputs[index] = value;
        setTestCaseInputs(newInputs);
        } else {
        const newOutputs = [...testCaseOutputs];
        newOutputs[index] = value;
        setTestCaseOutputs(newOutputs);
        }
    };

  return (
    <div>
        <div className="pt-[70px] md:pt-[80px]">
            <h1 className="text-3xl font-bold lg:text-4xl">
                <span className="underline decoration-blue-500">Create Problem</span>
            </h1>
            <form action="" className="">
            <div className="my-4">
                <label className="block mb-1">Name</label>
                <input type="text" name="" id="" className="w-full p-2 border"/>
            </div>

            <div className="mb-4">
                <label className="block mb-1">Category</label>
                <input type="text" name="" id="" className="w-full p-2 border"/>
            </div>

            <div className="mb-4">
                <label className="block mb-1">Time Limit</label>
                <input type="text" name="" id="" className="w-full p-2 border"/>
            </div>

            <div className="mb-4">
                <label className="block mb-1">Memori Limit</label>
                <input type="text" name="" id="" className="w-full p-2 border"/>
            </div>
            <label className="block mb-1">Test Case</label>
            <div className="gap-4 flex">
                <div className=" w-full">
                    {testCaseInputs.map((input, index) => (
                        <div key={index} className="flex w-full gap-x-6">
                            <div className="w-full">
                            {index === 0 && (
                                <label className="block mb-1">Input</label>
                            )}
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => handleInputChange(index, e.target.value, true)}
                                className="w-full p-2 border my-1"
                            />
                            </div>
                            <div className="w-full">
                            {index === 0 && (
                                <label className="block mb-1">Output</label>
                            )}
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
                    className="bg-black px-4 h-fit hover:opacity-70 rounded-sm">
                    +
                    </button>
                    <button
                    type="button"
                    onClick={handleRemoveTestCase}
                    className="bg-black px-4 h-fit hover:opacity-70 rounded-sm">
                    -
                    </button>
           
                </div>   
            </div>
            <div className="flex justify-end ">
                <button type="submit" className=" bg-black text-white px-3 py-2 mt-6 hover:opacity-60 mr-8 rounded-md">Submit</button>
            </div>
        </form>
        </div>
    </div>
  );
};

export default AdminCreateProblem;