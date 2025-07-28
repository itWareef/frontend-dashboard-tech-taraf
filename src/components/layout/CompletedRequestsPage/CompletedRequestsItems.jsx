import { useState } from "react";
import { completedRequestIcons } from "./completedRequestIcons";
import ModelClientData from "./ModelClientData";

const CompletedRequestsItems = ({ requests }) => {
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const handleOpenModel = (request) => {
    setSelectedRequest(request);
    setIsOpenModel(!isOpenModel);
  };
  return (
    <>
      {isOpenModel && (
        <ModelClientData
          selectedRequest={selectedRequest}
          handleOpenModel={handleOpenModel}
        />
      )}
      {requests.map((request, index) => (
        <div
          key={index}
          className=" w-full bg-white md:max-w-[360px] font-bold pb-2  text-primary rounded-lg   shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mb-6"
        >
          {/* Head */}
          <div className="headerCard grid grid-cols-2 rounded-t-lg bg-chart-1">
            <div className="item flex items-center justify-center border-l border-muted gap-3 py-4 ">
              {completedRequestIcons.orders}
              <h6 className="text-sm">طللب صيانه رقم {request.id}</h6>
            </div>
            <div className="item flex items-center justify-center gap-3 py-4 ">
              {completedRequestIcons.numVisits}
              <h6 className="text-sm">عدد الزيارات {request.visits}</h6>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-2">
            <div className="item flex items-center border-l border-muted gap-3 py-2 px-2 ">
              {completedRequestIcons.build}
              <h6 className="text-sm">{request.build}</h6>
            </div>
            <div className="item flex items-center gap-3 py-2 px-2 ">
              {completedRequestIcons.unit}
              <h6 className="text-sm">{request.unit}</h6>
            </div>

            <div className="item flex items-center border-t border-l border-muted gap-3 py-2 px-2 ">
              {completedRequestIcons.location}
              <h6 className="text-sm">{request.location}</h6>
            </div>
            <div className="item flex items-center border-t  border-muted gap-3 py-2 px-2 ">
              {completedRequestIcons.doc}
              <h6 className="text-sm">{request.service}</h6>
            </div>

            <div className="item flex items-center border-t border-l border-muted gap-3 py-2 px-2 ">
              {completedRequestIcons.camera}
              <h6 className="text-sm">{request.imageLabel}</h6>
              {completedRequestIcons.eye}
            </div>
            <div className="item flex items-center border-t  border-muted gap-3 py-2 px-2 ">
              {completedRequestIcons.notes}
              <h6 className="text-sm">{request.notesLabel}</h6>
              {completedRequestIcons.eye}
            </div>

            <div className="item flex items-center border-t border-l border-muted gap-3 py-2 px-2 ">
              <h6 className="text-sm"> فتح الطلب </h6>
              <span>{request.openDate}</span>
            </div>
            <div className="item flex items-center border-t  border-muted gap-3 py-2 px-2 ">
              <h6 className="text-sm"> اغلاق الطلب </h6>
              <span>{request.closeDate}</span>
            </div>

            <div className="item flex items-center border-t  border-muted gap-3 py-2 px-2 ">
              {completedRequestIcons.time}
              <h6 className="text-sm"> مدة استغراق الطلب </h6>
            </div>
            <div className="item flex items-center border-t  border-muted gap-3 py-2 px-2 ">
              <h6 className="text-sm">{request.duration}</h6>
            </div>
          </div>

          {/* Part 2 */}
          <div className="item flex items-center bg-chart-1 gap-3 py-2 px-2 ">
            {completedRequestIcons.client}
            <h6 className="text-sm"> العميل </h6>
          </div>

          <div className="grid grid-cols-2">
            <div className="item flex items-center border-l border-muted gap-3 py-2 px-2 ">
              {completedRequestIcons.client}
              <h6 className="text-sm">{request.client.name}</h6>
            </div>
            <div className="item flex items-center gap-3 py-2 px-2 ">
              {completedRequestIcons.phone}
              <h6 className="text-sm">{request.client.phone}</h6>
            </div>
          </div>

          <div className="item flex items-center  border-t  border-muted gap-3 py-2 px-2 ">
            {completedRequestIcons.email}
            <h6 className="text-sm">{request.client.email}</h6>
          </div>
          <div className="item flex items-center  border-t  border-muted gap-3 py-2 px-2 ">
            {completedRequestIcons.doc}
            <h6 className="text-sm">
              تاريخ انتهاء العقد : {request.client.contractEndDate}
            </h6>
          </div>

          {/* Part 3 */}
          <div className="item flex items-center bg-chart-1 gap-3 py-2 px-2 ">
            {completedRequestIcons.client}
            <h6 className="text-sm"> مشرف الصيانة </h6>
          </div>

          <div className="grid grid-cols-2">
            <div className="item flex items-center border-l border-muted gap-3 py-2 px-2 ">
              {completedRequestIcons.client}
              <h6 className="text-sm">{request.supervisor.name}</h6>
            </div>
            <div className="item flex items-center gap-3 py-2 px-2 ">
              {completedRequestIcons.phone}
              <h6 className="text-sm">{request.supervisor.phone}</h6>
            </div>
          </div>

          <div className="item flex items-center  border-t  border-muted gap-3 py-2 px-2 ">
            {completedRequestIcons.email}
            <h6 className="text-sm">{request.supervisor.email}</h6>
          </div>

          <div className="grid grid-cols-2">
            <div className="item flex items-center border-t border-l border-muted gap-3 py-2 px-2 ">
              {completedRequestIcons.camera}
              <h6 className="text-sm">{request.supervisor.workImage}</h6>
              {completedRequestIcons.eye}
            </div>
            <div className="item flex items-center border-t  border-muted gap-3 py-2 px-2 ">
              {completedRequestIcons.notes}
              <h6 className="text-sm">{request.supervisor.purchaseInvoices}</h6>
              {completedRequestIcons.eye}
            </div>
          </div>

          <div className="item flex  items-center justify-between border-t  border-muted gap-3 py-2 px-3 ">
            <h6 className="text-sm"> تقييم العميل للمشرف </h6>
            <div className="flex gap-2">
              {Array.from({ length: request.supervisor.rating }).map((_, i) => (
                <span key={i}>{completedRequestIcons.starFill}</span>
              ))}
            </div>
          </div>
          <div className="px-2 flex  items-center justify-end ">
            <button
              onClick={() => {
                handleOpenModel(request);
              }}
              className="bg-secondary flex items-center gap-2 px-2  h-6 w-20 rounded-[6px] text-white"
            >
              <img src="/Icons/history.svg" alt="" />
              السجل
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CompletedRequestsItems;
