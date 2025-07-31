import Store_Main_Img from "../assets/images/Store_Main_Img.png";
import Store_Advantage_Img from "../assets/images/Store_Advantage_Img.png";

//==================================================================

export const table_store_tabs = [
  {
    name: "الاصناف",
    value: "items",
    table: {
      headCells: [
        "الصورة الرئيسية",
        "الصورة الاخرى",
        "اسم الصنف",
        "الوصف",
        "البند",
        "المميزات",
        "السعر",
        "",
        "العمليات",
      ],
      rows: Array.from({ length: 10 }, (_, id) => ({
        id,
        mainImg: Store_Main_Img,
        otherImg: Store_Main_Img,
        categoryName: `category ${id + 1}`,
        description: "hello there",
        terms: `terms ${id + 1}`,
        advantages: Store_Advantage_Img,
        price: 555,
      })),
    },
  },
  {
    name: "الانواع",
    value: "types",
    table: {
      headCells: ["الايقونة", "اسم النوع", "الاصناف", "العمليات"],
      rows: Array.from({ length: 3 }, (_, id) => ({
        id,
        icon: Store_Main_Img,
        term_name: "نوع",
        category: "صنف",
      })),
    },
  },
  {
    name: "المميزات",
    value: "features",
    table: {
      headCells: ["الايقونة", "اسم الميزة", "الوصف", "العمليات"],
      rows: Array.from({ length: 3 }, (_, id) => ({
        id,
        icon: Store_Advantage_Img,
        advantage_term: `ميزة جديده ${id + 1}`,
        description: "الوصف هنا",
      })),
    },
  },
  {
    name: "المنشورات الدعائية",
    value: "promotional_posts",
    table: {
      headCells: ["الصورة", "الاسم التوضيحي", "حالة المنشور", "العمليات"],
      rows: Array.from({ length: 3 }, (_, id) => ({
        id,
        image: Store_Main_Img,
        name: "منشور دعائي",
        content: "هنا محتوى",
      })),
    },
  },
  {
    name: "طلبات المنتجات",
    value: "product_requests",
    table: {
      headCells: [
        "رقم الطلب",
        "اسم المستلم",
        "رقم التواصل",
        "التاريخ المتوقع لإستلام الطلب",
        "تفاصيل الشحن",
        "ملخص الطلب",
        " حالة الطلب",
      ],

      rows: Array.from({ length: 3 }, (_, id) => ({
        id,
        order_number: 5248,
        recipient_name: "عبد الله",
        number: "0555000000",
        date: "10/5/2025",
        shipping_details: "شارع السلام",
      })),
    },
  },
  {
    name: "المدفوعات",
    value: "payments",
    table: {
      headCells: [
        "اسم العميل",
        "رقم الهاتف",
        "قيمة الفاتورة",
        "تفاصيل الفاتورة",
        "المرفقات",
        "حالة الفاتورة",
        "العمليات",
      ],
      rows: Array.from({ length: 3 }, (_, id) => ({
        id,
        customer_name: "عبد الله",
        number: "0555000000",
        invoice_value: 511,
        invoice_details: "تفاصيل هنا",
      })),
    },
  },
  {
    name: "الكوبونات",
    value: "coupons",
    table: {
      headCells: [
        "كود الخصم",
        "نسبة الخصم",
        " تاريخ بداية صلاحية الكود",
        "تاريخ نهاية صلاحية الكود",
        "صلااحية المستخدم",
        "حالة الكود",
        "العمليات",
      ],
      rows: Array.from({ length: 3 }, (_, index) => ({
        id: index + 1,
        discount_code: 555555,
        discount_percentage: 50,
        start_date: "2025-5-10",
        end_date: "2025-5-20",
        user_authority: "مدير",
      })),
    },
  },
];

//================================================================

export const offer_price_table = {
  headCells: [
    "رفم العرض",
    "اسم العميل",
    "تاريخ انشاء العرض",
    "تاريخ اانتهاء العرض",
    "قيمة العرض",
    "حالة العرض",
    "اخطار االعميل",
    "العمليات",
  ],
  rows: [
    {
      offer_number: 5824,
      name: "احمد",
      start_date: "11/12/2025",
      start_end: "10/9/2025",
      offer_price: 854,
    },
    {
      offer_number: 5824,
      name: "احمد",
      start_date: "11/12/2025",
      start_end: "10/9/2025",
      offer_price: 584,
    },
    {
      offer_number: 5824,
      name: "احمد",
      start_date: "11/12/2025",
      start_end: "10/9/2025",
      offer_price: 845,
    },
  ],
};

//================================================================

export const submitting_entities_tabs = [
  {
    name: "افراد",
    value: "individuals",
    table: {
      headCells: ["اسم العميل", "رقم الهاتف", "البريد الالكتروني", "العروض"],
      rows: [
        ...Array.from({ length: 3 }, (_, i) => ({
          name: "اسلام عادل",
          phone: "01111111111",
          email: "eslam1425@gmail.com",
        })),
      ],
    },
  },
  {
    name: "شركات",
    value: "companies",
    table: {
      headCells: [
        "اسم الشركة",
        "رقم الهاتف",
        "البريد الالكتروني",
        "مسئول التواصل",
        "العروض",
      ],
      rows: [
        ...Array.from({ length: 10 }, (_, i) => ({
          company_name: "شركة ترف",
          phone: "01111111111",
          email: "taraf1425@gmail.com",
          delivery_person: "اسلام عادل",
        })),
      ],
    },
  },
];

//================================================================

export const offers_terms_tabs = {
  name: "البنود",
  value: "terms",
  table: {
    headCells: ["البند", "الصنف", "الوحدة", "السعر", "العمليات"],
    rows: [
      ...Array.from({ length: 3 }, (_, i) => ({
        id: i,
        term: "البند 1",
        category: "الصنف 1",
        unit: "كيلو",
        price: 152,
      })),
    ],
  },
};

//================================================================

export const technical_proposals_table = {
  name: "جميع العروض",
  value: "all_proposals",
  table: {
    headCells: [
      "رفم العرض",
      "اسم العميل",
      "تاريخ انشاء العرض",
      "اخطار العميل",
      "تفاصيل العرض",
    ],
    rows: [
      ...Array.from({ length: 3 }, (_, i) => ({
        id: i,
        offer_number: 5824,
        name: "احمد",
        start_date: "11/12/2025",
      })),
    ],
  },
};

//================================================================
