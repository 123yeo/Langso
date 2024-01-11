{
  /* <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> */
}
function fetchDataAndProcess() {
  document.addEventListener("DOMContentLoaded", async function () {
    try {
      const postData = {
        // Dữ liệu bạn muốn gửi đi
        key1: "value1",
        key2: "value2",
      };

      const response = await axios.get(
        "http://api.langso.irlab.vn/home_posts?id=4"
      );

      if (response.status !== 200) {
        throw new Error("Lỗi kết nối API");
      }

      const data = response.data;
      // Xử lý dữ liệu từ API ở đây
      console.log("dữ liệu", data);
    } catch (error) {
      console.error("Lỗi: " + error);
    }
  });
}
// function fetchDataAndProcess() {
//     document.addEventListener("DOMContentLoaded", async function () {
//         try {
//             const postData = {
//                 // Dữ liệu bạn muốn gửi đi
//                 key1: "value1",
//                 key2: "value2",
//             };

//             const response = await axios.get("http://api.langso.irlab.vn/home_posts?id=4", postData);

//             if (response.status !== 200) {
//                 throw new Error("Lỗi kết nối API");
//             }

//             const data = response.data;
//             // Xử lý dữ liệu từ API ở đây
//             console.log("dữ liệu", data);
//         } catch (error) {
//             console.error("Lỗi: " + error);
//         }
//     });
// }
