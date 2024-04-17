
const apiUrl = 'https://node-api-videos-uka2.onrender.com/videos';
var porcetagemApi  
async function getAllPosts() {
  const response = await fetch(apiUrl)
  console.log(response)
  const data = await response.json()
  console.log(data)
  data.map((post) => {
    console.log(post.duration)
    porcetagemApi = post.duration
  })
}
getAllPosts()


// export { porcetagemApi, getAllPosts };