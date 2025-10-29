import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="text-center border-2 border-rose-200 mt-4">
        <div className="flex items-center justify-center gap-4 mt-4 mb-4">
            <FaInstagram  size={30} className="hover:size-8 cursor-pointer"/>
            <FaFacebook size={30} className="hover:size-8 cursor-pointer"/>
            <FaWhatsapp size={30} className="hover:size-8 cursor-pointer"/>
        </div>

        <div>
            <p className="text-gray-700">&copy; 2025 II Giardino. Todos os direitos reservados.</p>
        </div>
    </div>
  )
}

export default Footer