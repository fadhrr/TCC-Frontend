'use client';
import Headline from '../ui/headline';
import { Button } from '@/components/ui/button';

export default function ContestForm() {
  return (
    <section className="bg-white">
      <div className="container px-8 py-10 mx-auto">
        <Headline
          title="Create Contest"
          desc=" Welcome to the Contests section, here you will find a variety of exciting contests and challenges that cater to diverse interests and skills. Each contest is designed to test your abilities and knowledge in a specific area."
        />
        <div className="w-full  md:px-0 px-4 py-8 z-20 ">
          {/* card */}
          <div id="section2" className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
            <form>
              {/* 1 */}
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <label htmlFor="image">Image</label>
                </div>
                <div className="md:w-2/3">
                  <input type="file" id="image" className="mb-2" required />
                  <p className="py-2 text-sm italic text-gray-600">tambah gambar berkaitan kontes</p>
                </div>
              </div>
              {/* 2 */}
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <label htmlFor="image">Title</label>
                </div>
                <div className="md:w-2/3">
                  <input className="block w-full p-4 text-lg border border-black rounded-md" type="text" id="title" required />
                </div>
              </div>
              {/* 3 */}
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <label htmlFor="image">Description</label>
                </div>
                <div className="md:w-2/3">
                  <input className="block w-full p-4 text-lg border border-black rounded-md" type="text" id="title" required />
                </div>
              </div>
              {/* 4 */}
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <label htmlFor="image">Available Until</label>
                </div>
                <div className="md:w-2/3">
                  <input className="block w-full p-4 text-lg  mb-2 border border-black rounded-md" required type="datetime-local" id="deadline" />
                </div>
              </div>
              {/* 6 */}
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <label htmlFor="image">Duration</label>
                </div>
                <div className="md:w-2/3">
                  <input className="block w-full p-4 text-lg  border border-black rounded-md" placeholder="durasi dalam menit" type="number" name="quantity" id="quantity" required />
                </div>
              </div>
              {/* 7 */}
              <div className="md:flex mb-6">
                <div className="md:w-1/3">
                  <label htmlFor="image">Author</label>
                </div>
                <div className="md:w-2/3">
                  <input className="block w-full p-4 text-lg border border-black rounded-md" type="text" id="title" required />
                </div>
              </div>
              <div className="md:col-span-5 text-left md:text-right">
                <div className="inline-flex  md:items-end">
                  <Button className="w-40">Post</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
