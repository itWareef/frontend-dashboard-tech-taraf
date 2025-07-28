import HeaderPopup from "@/components/shared/HeaderPopup/HeaderPopup";
import React from "react";

const ModelClientData = ({ selectedRequest, handleOpenModel }) => {
  return (
    <section className="p-8 backdrop-blur-xl fixed top-0 left-0 right-0 bottom-0 z-50 min-h-screen bg-white/50">
      <HeaderPopup
        PageName={`طلب رقم ${selectedRequest.id}`}
        action={handleOpenModel}
      />

      <div className="container mx-auto  flex justify-center ">
        <div className="bg-white w-full  rounded shadow-lg overflow-hidden">
          {/* Head */}
          <div className="bg-secondary py-4">
            <h2 className="text-center text-xl md:text-3xl font-bold text-white">
              طلب رقم {selectedRequest.id}
            </h2>
          </div>

          {/* Body */}
          <div className="py-5 px-6 space-y-4  grid grid-cols-2">
            <div></div>
            {/* Details For User */}
            <div className="text-muted ">
              {/* Client */}
              <div>
                <h3 className="text-xl font-bold text-primary relative overflow-hidden ">
                  العميل
                  <span className="absolute bottom-2 transform -translate-x-20 left-0 w-full h-0.5 bg-muted/50"></span>
                </h3>
                <div className="flex gap-10">
                  <p>اسم العميل: {selectedRequest.client.name}</p>
                  <p> رقم العميل {selectedRequest.client.name}</p>
                </div>
                <p>الهاتف: {selectedRequest.build}</p>
                <p>البريد الأكتروني: {selectedRequest.build}</p>
                <p> حالة التعاقد : تعاقد</p>
              </div>

              {/* Unit */}
              <div>
                <h3 className="text-xl font-bold text-primary relative overflow-hidden ">
                  الوحده
                  <span className="absolute bottom-2 transform -translate-x-20 left-0 w-full h-0.5 bg-muted/50"></span>
                </h3>{" "}
                <div className="flex gap-10">
                  <p> المشروع: {selectedRequest.client.name}</p>
                  <p> رقم الوحده: {selectedRequest.client.name}</p>
                </div>
                <p>المطور: {selectedRequest.build}</p>
                <p>تاريخ بدايه العقد :</p>
                <p>تاريخ بدايه العقد :</p>
              </div>

              {/* Contract */}
              <div>
                <h3 className="text-xl font-bold text-primary relative overflow-hidden ">
                  العقد
                  <span className="absolute bottom-2 transform -translate-x-20 left-0 w-full h-0.5 bg-muted/50"></span>
                </h3>{" "}
                <div className="flex gap-10">
                  <p> نوع العقد: {selectedRequest.client.name}</p>
                  <p> رقم العقد: {selectedRequest.client.name}</p>
                </div>
                <p>تاريخ بدايه العقد :</p>
                <p>تاريخ انتهاء العقد :</p>
              </div>

              {/* Supervisor */}
              <div>
                <h3 className="text-xl font-bold text-primary relative overflow-hidden ">
                  المشرف
                  <span className="absolute bottom-2 transform -translate-x-20 left-0 w-full h-0.5 bg-muted/50"></span>
                </h3>{" "}
                <h3>عميل</h3>
                <div className="flex gap-10">
                  <p>اسم المشرف: {selectedRequest.client.name}</p>
                  <p> رقم المشرف: {selectedRequest.client.name}</p>
                </div>
                <p>الهاتف: {selectedRequest.build}</p>
                <p>البريد الأكتروني: {selectedRequest.build}</p>
                <div>
                  <p> متوسط تققيم المشرف :</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelClientData;
