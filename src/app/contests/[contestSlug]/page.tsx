"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ModalSucces } from "@/components/ui/modal";
import { Card } from "@/components/problems/Card";
import { useRole } from '@/context/RoleContext';
import Image from "next/image";
import {
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Input,
  Textarea,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

async function getId(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/s/${slug}`
  );
  if (res.status == 404) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }
  return res.json();
}


async function getContestOverview(contestId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/${contestId}`
  );
  if (res.status == 404) {
    return res.status;
  }
  if (!res.ok) {
    throw new Error("Failed to fetch score memory data");
  }
  return res.json();
}

export default function ContestDetail({
  params,
}: {
  params: { contestSlug: string };
}) {
  const [showModal, setShowModal] = useState(false);
  const [contestOverview, setContestOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditContestOpen, setIsEditContestOpen] = useState(false);

  const [editedContestData, setEditedContestData] = useState({
    title: "",
    slug: "",
    description: "",
    start_time: "",
    end_time: "",
});

  const [editingContestId, setEditingContestId] = useState(null);

  const { role } = useRole();
  console.log({role});
  
  

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contestObj = await getId(params.contestSlug);
        const contestData = await getContestOverview(contestObj.id);
        setContestOverview(contestData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.contestSlug]);

  if (loading || contestOverview == null) {
    return <>Loading</>;
  }

  // edit contest
  const editContest = (contestId: any) =>{
    setEditedContestData({
      title: contestOverview.title,
      slug: contestOverview.title.toLowerCase().replace(/\s+/g, '-'),
      description: contestOverview.description,
      start_time: contestOverview.start_time,
      end_time: contestOverview.end_time,
    });

    setEditingContestId(contestId);
    setIsEditContestOpen(true);
  }

  const handleEditContest = async() =>{
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/contest/${editingContestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedContestData),
      });
  
      if(response.status === 200){
        console.log(`Contest with id ${contestOverview.id} edited successfully`, response);
        const updatedContestData = await getContestOverview(editingContestId);
        setContestOverview(updatedContestData);
        setIsEditContestOpen(false);
        setEditedContestData({
          title: "",
          slug: editedContestData.title.toLowerCase().replace(/\s+/g, '-'),
          description: "",
          start_time: "",
          end_time: "",
        });
        router.push(`/contests/${editedContestData.slug}`)
      } else {
        const errorData = await response.json();
        console.error(`Failed to edit user with ID ${editingContestId}. Server error: ${errorData.message}`);
      }
    } catch (error) {
      console.error(`Error editing user with ID ${editingContestId}.`, error);
    }
  }


  
  
  return (
    <Card className="container md:mt-0 !z-0 py-8 px-6">
      {role === 'Admin' && (
        <button onClick={()=>editContest(contestOverview.id)}>
            <Image alt="edit" src="/assets/icons/edit.svg" width={20} height={20} className="hover:opacity-65"></Image>
        </button>
      )}
        <Modal 
        size="lg"
        backdrop="blur" 
        isOpen={isEditContestOpen}
        onOpenChange={() => setIsEditContestOpen(!isEditContestOpen)}
        motionProps={{
            variants: {
                enter: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 0.3,
                    ease: "easeOut",
                },
                },
                exit: {
                y: -20,
                opacity: 0,
                transition: {
                    duration: 0.2,
                    ease: "easeIn",
                },
                },
            }
            }}
        >
            <ModalContent>
            {(onClose) => (
                <>
                <div className="bg-white p-4 rounded-lg shadow-md">
                <ModalHeader className="flex flex-col gap-1 text-2xl">Edit</ModalHeader>
                <ModalBody>
                        <label htmlFor="">Title</label>
                        <Input
                        autoFocus
                        placeholder="Enter title contest"
                        variant="bordered"
                        value={editedContestData.title}
                        onChange={(e:any) => setEditedContestData({ ...editedContestData, title: e.target.value })}
                        required
                        />
                        <label htmlFor="">Description</label>
                        <Textarea
                        autoFocus
                        placeholder="Enter description contest"
                        variant="bordered"
                        value={editedContestData.description}
                        onChange={(e:any) => setEditedContestData({ ...editedContestData, description: e.target.value })}
                        required
                        />
                        <label htmlFor="image">Start Time</label>
                        <Input
                          autoFocus
                          placeholder="Enter Start Time"
                          variant="bordered"
                          value={editedContestData.start_time}
                          onChange={(e:any) => setEditedContestData({ ...editedContestData, start_time: e.target.value })}
                          type="datetime-local"
                          name="startTime"
                          required
                        />
                        <label htmlFor="image">End Time</label>
                        <Input
                          autoFocus
                          placeholder="Enter End Time"
                          variant="bordered"
                          value={editedContestData.end_time}
                          onChange={(e:any) => setEditedContestData({ ...editedContestData, end_time: e.target.value })}
                          type="datetime-local"
                          name="endTime"
                          required
                        />
                </ModalBody>
                <ModalFooter>
                    <button color="danger" onClick={onClose} className="hover:opacity-60">
                    Close
                    </button>
                    <button color="primary" onClick={()=>{onClose(); handleEditContest();}} className="px-3 py-1 rounded-sm hover:opacity-60">
                    Submit
                    </button>
                </ModalFooter>
                </div>
            </>
            )}
        </ModalContent>
        </Modal>



      <h1 className="text-4xl font-bold text-center w-full mb-8">
        Contest Information
      </h1>
        <article className="group w-full flex-col flex gap-6 mb-8">
          <div className="flex gap-8 justify-center items-center flex-col">
            <div className="w-full flex text-center items-center justify-center flex-col ">
              <a href="#">
                <h3 className="md:text-4xl text-2xl font-reguler text-gray-900">
                  {contestOverview.title}
                </h3>
              </a>
              <p className="mt-2 line-clamp-3 w-4/5  text-sm/relaxed text-gray-500">
                {contestOverview.description}
              </p>
            </div>
          </div>
          <ul className="list-disc  px-4">
            {contestOverview.details?.map((detail, index) => (
              <li key={index}>
                {detail.label}: {detail.value}
              </li>
            ))}
          </ul>
        </article>
      {/* ))} */}
      <Button
        className="w-40"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Join
      </Button>
      {showModal && <ModalSucces setOpenModal={setShowModal} />}
    </Card>
  );
}
