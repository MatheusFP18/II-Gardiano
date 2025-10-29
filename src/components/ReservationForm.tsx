import { useState } from "react";

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  guests: 1,
  message: '',
};

const initialErrors = {
  email: '',
  phone: '',
  date: '',
  time: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneMaskRegex = /^(\d{0,2})(\d{0,5})(\d{0,4})$/;

const ReservationForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(e.target.value);
    setFormData(prev => ({ ...prev, phone: formattedPhone }));
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, guests: Number(e.target.value) }));
  };

  const validateEmail = (email: string) => {
    return emailRegex.test(email);
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replaceAll(/\D/g, '');
    const match = new RegExp(phoneMaskRegex).exec(cleaned);
    if (!match) return cleaned;
    let formatted = '';
    if (match[1]) {
      formatted += `(${match[1]}`;
    }
    if (match[2]) {
      formatted += `) ${match[2]}`;
    }
    if (match[3]) {
      formatted += `-${match[3]}`;
    }
    return formatted;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, phone, date, time } = formData;
    const newErrors = { ...initialErrors };
    let hasError = false;

    if (!validateEmail(email)) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
      hasError = true;
    }
    if (phone.replaceAll(/\D/g, '').length !== 11) {
      newErrors.phone = 'O telefone deve ter 11 dígitos (DDD + número).';
      hasError = true;
    }

    const selectedDate = new Date(date);
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    if (selectedDate < todayDate) {
      newErrors.date = 'A data da reserva não pode ser no passado.';
      hasError = true;
    }

    if (time < "18:00" || time > "22:00") {
      newErrors.time = 'O horário de reserva deve ser entre 18:00 e 22:00.';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      console.log("Dados da reserva: ", formData);
      alert("Reserva confirmada!");
      setFormData(initialFormData);
    }
  };

  return (
    <div className="container mx-auto font-serif max-w-2xl">
        <h1 className="text-center text-3xl sm:text-4xl mt-10 mb-10">Faça sua reserva</h1>

        <form onSubmit={handleSubmit} className="bg-white shadow-xl space-y-6 rounded-md p-8">
            <div>
                <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Data:</label>
                <input type="date" id="date" required value={formData.date} min={today} onChange={handleChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 ${errors.date ? 'border-red-500 focus:ring-red-500' : 'focus:ring-lime-500'}`}/>
                {errors.date && <p className="text-red-500 text-xs italic mt-1">{errors.date}</p>}
            </div>
            <div>
                <label htmlFor="hour" className="block text-gray-700 text-sm font-bold mb-2">Horário:</label>
                <input type="time" id="time" required value={formData.time} min="18:00" max="22:00" onChange={handleChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 ${errors.time ? 'border-red-500 focus:ring-red-500' : 'focus:ring-lime-500'}`}/>
                {errors.time && <p className="text-red-500 text-xs italic mt-1">{errors.time}</p>}
            </div>
            <div>
                <label htmlFor="guests" className="block text-gray-700 text-sm font-bold mb-2">Pessoas:</label>
                <input type="number" id="guests" min='1' required value={formData.guests} onChange={handleGuestsChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-lime-500"/>
            </div>
            <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                <input type="text" id="name" required value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-lime-500"/>
            </div>
            <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail:</label>
                <input type="email" id="email" required value={formData.email} onChange={handleChange} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-lime-500'}`}/>
                {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">Telefone:</label>
                <input type="tel" id="phone" required value={formData.phone} 
                  onChange={handlePhoneChange} 
                  maxLength={15} placeholder="(99) 99999-9999" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'focus:ring-lime-500'}`}/>
                {errors.phone && <p className="text-red-500 text-xs italic mt-1">{errors.phone}</p>}
            </div>
            <div>
                <label htmlFor="observe" className="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
                <textarea  id="message" rows={4} value={formData.message} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-lime-500"/>
            </div>
            <button type="submit" className="bg-lime-500 text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-lime-600 transition-colors text-lg font-serif w-full">Confirmar Reserva</button>
        </form>
    </div>
  )
}

export default ReservationForm