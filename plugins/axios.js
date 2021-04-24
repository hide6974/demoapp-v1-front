export default ({ $axios, redirect }) => {
    // リクエストログ
    $axios.onRequest((config) => {
      console.log(config)
    })
    // レスポンスログ
    $axios.onResponse((config) => {
      console.log(config)
    })
    // エラーログ
    $axios.onError((e) => {
      console.log(e.response)
    })
    
    // 404エラーログ
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 404) {
            redirect('/404')
      }
    })

}
// export default function ({ $axios, redirect }) {
 
//     $axios.onError(error => {
//         const code = parseInt(error.response && error.response.status)
//         if (code === 404) {
//             redirect('/404')
//         }
//     })
 
// }