// async function fetchWidget() {
//   const responce = await fetch('https://console.dealroomevents.com/assets/dealRoomWidgets.js', {
//     mode: 'cors',
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//     },
//   })
//     .then((response) => {
//       const reader = response.body?.getReader();
//       return new ReadableStream({
//         start(controller) {
//           //TODO create interface for this generic
//           function pump(): Promise<Object | null | undefined> | undefined {
//             return reader?.read().then(({ done, value }) => {
//               if (done) {
//                 controller.close();
//                 return;
//               }
//               controller.enqueue(value);
//               return pump();
//             });
//           }
//           return pump();
//         },
//       });
//     })
//     .then((stream) => new Response(stream))
//     .then((response) => response.blob())
//     .then((blob) => {
//       return blob.slice().text();
//     })
//     .catch((err) => console.error(err));
//   return responce;
// }

// export default fetchWidget;
