import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
     
       <Card tittle={"this is title of the card"} description={"this is the description of the card"} />
      
    </div>
  );
}
