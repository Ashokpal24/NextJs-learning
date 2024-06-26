import Image from "next/image";
import wondersImages, { WonderImage } from "../wonder";
import Modal from "../../../../components/model";

export default function PhotoModel(
    { params }: {
        params: { id: string }
    }) {
    const photo: WonderImage = wondersImages.find((p) => p.id === params.id)!;

    return (
        <Modal>
            {/* <h1>brr</h1> */}
            <Image
                alt={photo.name}
                src={photo.src}
                className="w-full object-cover aspect-square"
            />

            <div className="bg-white p-4">
                <h2 className="text-xl font-semibold">{photo.name}</h2>
                <h3>{photo.photographer}</h3>
                <h3>{photo.location}</h3>
            </div>
        </Modal>
    );

}