'use client'
import { Button } from "@/components/ui/button"
import { createDocument } from "@/lib/actions/room.actions"
import Image from "next/image"
import { useRouter } from "next/navigation"

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {

  const router = useRouter();

  async function addDocumentHandler() {
    try {
      const room = await createDocument({ userId, email })
      if (room) {
        router.push(`/documents/${room.id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Button type="submit" onClick={addDocumentHandler} className="bg-white text-black flex gap-1 shadow-md hover:bg-slate-100">
      <Image
        src='/assets/icons/add.svg'
        alt="add"
        width={24}
        height={24}
        className="bg-stone-700 rounded-xl mr-2"
      />
      <p className="hidden sm:block">  Start a blank document</p>
    </Button>
  )
}

export default AddDocumentBtn