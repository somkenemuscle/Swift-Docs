import { useOthers } from "@liveblocks/react/suspense"
import Image from "next/image";

const Activecollaborators = () => {
    //See other users who are actively on this document (read\write)
    const others = useOthers();
    const collaborators = others.map((other) => other.info);
    
    return (
        <ul className="collaborators-list">
            {
                collaborators.map(({ id, avatar, name, color }) => (
                    <li className="bg-white p-1" key={id}>
                        <Image
                            src={avatar}
                            alt={name}
                            width={80}
                            height={100}
                            className="inline-block size-8 rounded-full ring-2 ring-dark-100"
                            style={{ border: `3px solid ${color}` }}
                        />
                    </li>
                ))
            }
        </ul>
    )
}

export default Activecollaborators