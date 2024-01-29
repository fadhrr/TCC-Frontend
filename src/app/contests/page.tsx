import ContestTop from "@/components/Contest/ContestTop";
import ContestCard from "@/components/Contest/ContestCard";

export default function Contest() {
    return (
        <>
            <div className="overflow-hidden font-mono md:min-w-fit pb-8  pt-[70px] md:pt-[80px] px-0 md:px-10 xl:min-w-full">
                <ContestTop />
                <ContestCard />
            </div>
        </>
    );
}
