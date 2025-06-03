import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10">
      <div className="max-w-lg space-y-6">
        <h1 className="text-4xl font-bold leading-tight font-sans">
          Navigating the<br />digital landscape<br />for success
        </h1>
        <p className="text-gray-600 font-sans">
          Our digital marketing agency helps businesses grow and succeed online...
        </p>
        <button
          onClick={() => navigate('/consultation')} 
          className="font-sans px-6 py-3 bg-[#FCC24B] text-white rounded-lg"
        >
          Book a consultation
        </button>
      </div>

      <div className="mt-10 md:mt-0">
        <img src="/images/motion.gif" alt="Motion graphic" className="w-[500px] h-auto" />
      </div>
    </section>
  );
}
