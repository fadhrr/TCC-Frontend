import ContestTop from "@/components/Contest/ContestTop";
import ContestCard from "@/components/Contest/ContestCard";

export default function Contest() {
    return (
        <>
            <div className="overflow-hidden font-mono md:min-w-fit  py-2 md:px-8 px-6 xl:min-w-full">
                <ContestTop />
                <ContestCard />
            </div>
        </>
    );
}
