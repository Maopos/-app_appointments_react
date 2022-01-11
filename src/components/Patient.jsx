const Patient = () => {
  return (
    <div className="bg-white shadow-md rounded md:mx-5 py-5 px-10 mb-5">
      <p className="font-semibold text-gray-700 ">
        Name: <span className="font-normal">Hook</span>
      </p>
      <hr className="mb-2" />
      <p className="font-semibold mb-2 text-gray-700 ">
        Owner Name: <span className="font-normal">Veronica Posada</span>
      </p>
      <p className="font-semibold mb-2 text-gray-700 ">
        Email: <span className="font-normal">veropos@email.com</span>
      </p>
      <p className="font-semibold mb-2 text-gray-700 ">
        Check In: <span className="font-normal">January 10th 2022</span>
      </p>
      <p className="font-semibold mb-2 text-gray-700 ">
        Symtoms: <span className="font-normal">Headache</span>
      </p>
    </div>
  );
};

export default Patient;
