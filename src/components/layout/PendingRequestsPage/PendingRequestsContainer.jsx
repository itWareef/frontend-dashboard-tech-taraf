import userImg from "../../../assets/imgProfile.png";
import { pendingRequestsIcons } from "./PendingRequestsIcons";

const PendingRequestsContainer = () => {
  const statusSteps = [
    { id: 1, name: "تم قبول الطلب", label: "Request accepted" },
    {
      id: 2,
      name: "في انتظار زيارة مشرف الصيانه",
      label: "Waiting for supervisor visit",
    },
    { id: 3, name: "طلب  زيارة  اخري", label: "Request another visit" },
    { id: 4, name: "تم الانتهاء من الطلب", label: "Request completed" },
    { id: 5, name: "في انتظار تقييم الطلب", label: "Waiting for evaluation" },
  ];

  const requests = [
    {
      id: 1,
      title: "طلب الصيانة الكهربائية",
      warehouse: "مستودع A12",
      unit: "الوحدة 5",
      district: "القسم الكهربائي",
      date: "15/6/2025",
      customer: "أحمد محمد",
      technician: "خالد عبدالله",
      currentStatus: 1, // 25%
    },
    {
      id: 2,
      title: "طلب صيانة التكييف",
      warehouse: "مستودع B7",
      unit: "الوحدة 12",
      district: "قسم التبريد",
      date: "10/6/2025",
      customer: "سارة علي",
      technician: "محمود حسن",
      currentStatus: 2, // 50%
    },
    {
      id: 3,
      title: "طلب صيانة السباكة",
      warehouse: "مستودع C3",
      unit: "الوحدة 8",
      district: "القسم الصحي",
      date: "5/6/2025",
      customer: "عمر خالد",
      technician: "ياسر ناصر",
      currentStatus: 3, // 75%
    },
    {
      id: 4,
      title: "طلب صيانة الأجهزة",
      warehouse: "مستودع D9",
      unit: "الوحدة 3",
      district: "قسم الأجهزة",
      date: "1/6/2025",
      customer: "نورة سعد",
      technician: "فهد راشد",
      currentStatus: 4, // 100%
    },
    {
      id: 5,
      title: "طلب الصيانة الكهربائية",
      warehouse: "مستودع A12",
      unit: "الوحدة 5",
      district: "القسم الكهربائي",
      date: "15/6/2025",
      customer: "أحمد محمد",
      technician: "خالد عبدالله",
      currentStatus: 4, // 25%
    },
    {
      id: 6,
      title: "طلب صيانة التكييف",
      warehouse: "مستودع B7",
      unit: "الوحدة 12",
      district: "قسم التبريد",
      date: "10/6/2025",
      customer: "سارة علي",
      technician: "محمود حسن",
      currentStatus: 1, // 50%
    },
    {
      id: 7,
      title: "طلب صيانة السباكة",
      warehouse: "مستودع C3",
      unit: "الوحدة 8",
      district: "القسم الصحي",
      date: "5/6/2025",
      customer: "عمر خالد",
      technician: "ياسر ناصر",
      currentStatus: 3, // 75%
    },
    {
      id: 8,
      title: "طلب صيانة الأجهزة",
      warehouse: "مستودع D9",
      unit: "الوحدة 3",
      district: "قسم الأجهزة",
      date: "1/6/2025",
      customer: "نورة سعد",
      technician: "فهد راشد",
      currentStatus: 4, // 100%
    },
    {
      id: 9,
      title: "طلب صيانة التكييف",
      warehouse: "مستودع B7",
      unit: "الوحدة 12",
      district: "قسم التبريد",
      date: "10/6/2025",
      customer: "سارة علي",
      technician: "محمود حسن",
      currentStatus: 4, // 50%
    },
  ];

  return (
    <div className="h-[calc(100vh-160px)] p-3 rounded-2xl my-3">
      <div className="relative h-full">
        <div
          className="absolute inset-0 overflow-y-auto rounded-[6px] 
        [-ms-overflow-style:none]
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 my-5 p-4">
            {requests.map((request) => {
              const progressPercentage = request.currentStatus * 25;

              return (
                <div
                  key={request.id}
                  className="card  mx-auto text-sm bg-card rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Head */}
                  <div className="head bg-[#9BD3CA] flex p-5 items-center rounded-t-lg gap-3 text-primary justify-center">
                    {pendingRequestsIcons.setting}
                    <h3 className="font-medium text-xl">{request.title}</h3>
                  </div>

                  <div className="text-center py-5 border-b  border-muted">
                    <h6 className="relative w-fit mx-auto">
                      <span className="absolute top-1/2 h-10 -right-2 overflow-hidden  transform translate-x-1/2 -translate-y-1/2">
                        {pendingRequestsIcons.orders}
                      </span>
                      طلب رقم 317
                    </h6>
                  </div>

                  {/* Content */}
                  <div className="grid grid-cols-2  px-2">
                    {/* Warehouse */}
                    <div className="flex items-center gap-4 p-2 border-l border-muted ps-1 border-b">
                      {pendingRequestsIcons.build}

                      <span>{request.warehouse}</span>
                    </div>

                    {/* Unit */}
                    <div className="flex items-center gap-4 p-2 border-s border-muted border-b">
                      {pendingRequestsIcons.unit}
                      <span>{request.unit}</span>
                    </div>

                    {/* District */}
                    <div className="flex items-center gap-4 p-2 border-l border-muted border-b">
                      {pendingRequestsIcons.notes}

                      <span>{request.district}</span>
                    </div>

                    {/* Request Date */}
                    <div className="flex items-center gap-4 p-2 border-s border-muted border-b">
                      {pendingRequestsIcons.date}
                      <span>{request.date}</span>
                    </div>

                    {/* District */}
                    <div className="flex items-center gap-4 p-2 border-l border-muted border-b">
                      {pendingRequestsIcons.camera}

                      <div className="flex items-center gap-2">
                        <span>صوره الطلب</span>
                        {pendingRequestsIcons.eye}
                      </div>
                    </div>

                    {/* Request Notes */}
                    <div className="flex items-center gap-4 p-2 border-s border-muted border-b">
                      {pendingRequestsIcons.notes}
                      <div className="flex items-center gap-2">
                        <span> ملاحظات</span>
                        {pendingRequestsIcons.eye}
                      </div>
                    </div>

                    {/* Customer */}
                    <div className="flex items-center gap-4 p-2 border-l border-muted border-b">
                      <div className="text-right">
                        <span className="bloc text-xl text-secondary  ">
                          العميل
                        </span>

                        <p className="font-medium">{request.customer}</p>
                      </div>
                      <img
                        src={userImg}
                        alt={`صورة العميل ${request.customer}`}
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#068E7B]"
                      />
                    </div>

                    {/* Technician */}
                    <div className="flex items-center gap-4 p-2 border-muted border-b">
                      <div className="text-right">
                        <span className="bloc text-xl text-secondary  ">
                          المشرف
                        </span>
                        <p className="font-medium">{request.technician}</p>
                      </div>
                      <img
                        src={userImg}
                        alt={`صورة الفني ${request.technician}`}
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#068E7B]"
                      />
                    </div>

                    {/* Status Timeline */}
                    <div className="col-span-2 p-2 my-3">
                      <div className="flex gap-2">
                        {statusSteps.map((step) => (
                          <div
                            key={step.id}
                            className={`flex text-center justify-center items-center flex-col gap-y-5 p-2 rounded-md`}
                          >
                            <span
                              className={`h-4 w-4 relative rounded-full ${
                                request.currentStatus >= step.id
                                  ? "bg-[#068E7B]"
                                  : "bg-muted"
                              }`}
                            >
                              {request.currentStatus == step.id && (
                                <svg
                                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                  width="30"
                                  height="50"
                                  viewBox="0 0 18 37"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2.65649 0.00537109L0.272461 5.76587L8.20743 24.7244L8.72288 26.0975L11.8117 33.6514L12.9556 36.2203H19.1765L3.85797 0.00537109H2.65649Z"
                                    fill="#068E7B"
                                  />
                                </svg>
                              )}
                            </span>
                            <span className={`text-sm   `}>{step.name}</span>
                            {/* <span className="sr-only">{step.label}</span> */}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="col-span-2 px-2 pb-2 p-8 border-t border-secondary">
                      {/* Progress Bar Container */}
                      <div className="relative">
                        {/* Background Bar */}
                        <div className="w-full bg-muted rounded-full h-1">
                          {/* Progress Fill */}
                          <div
                            className="bg-[#068E7B] h-1 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>

                        {/* Progress Arrow Indicator */}
                        <div
                          className="absolute top-0 transform -translate-y-full"
                          style={{
                            right: `calc(${progressPercentage}% - 0px)`,
                          }}
                        >
                          <svg
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            width="30"
                            height="50"
                            viewBox="0 0 18 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.65649 0.00537109L0.272461 5.76587L8.20743 24.7244L8.72288 26.0975L11.8117 33.6514L12.9556 36.2203H19.1765L3.85797 0.00537109H2.65649Z"
                              fill="#068E7B"
                            />
                          </svg>
                        </div>

                        {/* Percentage Markers */}
                        <div className="flex justify-between mt-6 relative">
                          {[0, 25, 50, 75, 100].map((percent) => (
                            <span
                              key={percent}
                              className={`text-xs ${
                                progressPercentage >= percent
                                  ? "text-[#068E7B] font-medium"
                                  : "text-gray-500"
                              }`}
                            >
                              {percent}%
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Completion Text */}
                      <div className="text-center mt-3">
                        <span className="text-xs font-medium text-white bg-[#068E7B]/10 px-2 py-1 rounded-full">
                          {progressPercentage}% نسبة التقدم
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" bg-[#9BD3CA] mt-5 flex py-4 items-center rounded-b-lg gap-3 text-primary justify-center">
                    <h3 className="font-bold text-2xl">الغاء الطلب</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingRequestsContainer;
