const ClientsTBody = ({ clients, handleEdit, handleDelete }) => {
  return (
    <tbody>
      {clients.map((client, index) => (
        <tr key={index} className="group">
          <td className="px-2 py-3  bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200 rounded-r-[6px]">
            <img
              src={client.clientImage}
              alt={client.clientName}
              className="w-10 h-10 rounded-full "
            />
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.clientName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.clientContract}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.unitNumber}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.projectName}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.neighborhood}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.phone}
          </td>
          <td className="px-2 py-3 text-center text-primary bg-[#C8CCCC] hover:bg-[#B8BCBC] text-sm font-medium whitespace-nowrap transition-colors duration-200">
            {client.email}
          </td>

          <td className="w-[160px]">
            <div className="flex border-r-[1px] border-secondary rounded-l-[6px] bg-[#C8CCCC] hover:bg-[#B8BCBC] transition-colors duration-200">
              <button
                onClick={() => handleEdit(client)}
                className="flex-1 cursor-pointer  py-5 transition-colors flex justify-center items-center border-r-[1px] border-secondary"
                aria-label="تعديل"
              >
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.711 5.6115L23.888 8.787M22.754 2.814L14.1635 11.4045C13.7196 11.8477 13.4169 12.4125 13.2935 13.0275L12.5 16.9995L16.472 16.2045C17.087 16.0815 17.651 15.78 18.095 15.336L26.6855 6.7455C27.7712 5.65984 27.7712 3.89965 26.6855 2.814C25.5998 1.72834 23.8397 1.72834 22.754 2.814Z"
                    stroke="#1C7E68"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.5 19.9995V24.4995C24.5 26.1564 23.1569 27.4995 21.5 27.4995H5C3.34315 27.4995 2 26.1564 2 24.4995V7.99951C2 6.34266 3.34315 4.99951 5 4.99951H9.5"
                    stroke="#1C7E68"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleDelete(client.id)}
                className="flex-1 cursor-pointer py-5 relative   flex justify-center items-center"
                aria-label="حذف"
              >
                <div className="absolute right-0 h-full w-[2px] bg-secondary" />
                <svg
                  width="22"
                  height="27"
                  viewBox="0 0 22 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.59961 24C1.59961 25.65 2.94961 27 4.59961 27H16.5996C18.2496 27 19.5996 25.65 19.5996 24V6H1.59961V24ZM5.28961 13.32L7.40461 11.205L10.5996 14.385L13.7796 11.205L15.8946 13.32L12.7146 16.5L15.8946 19.68L13.7796 21.795L10.5996 18.615L7.41961 21.795L5.30461 19.68L8.48461 16.5L5.28961 13.32ZM15.8496 1.5L14.3496 0H6.84961L5.34961 1.5H0.0996094V4.5H21.0996V1.5H15.8496Z"
                    fill="#1C7E68"
                  />
                </svg>
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ClientsTBody;
