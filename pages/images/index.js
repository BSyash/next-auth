import Image from "next/image"
export async function getStaticProps() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/photos")
    const data = await resp.json()
    return {
        props: {
            photos: data
        }
    }
}
// export async function getServerSideProps() {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/photos")
//     const data = await resp.json()
//     return {
//         props: {
//             photos: data
//         }
//     }
// }

const Images = ({ photos }) => {

    return (
        <div>
            {
                photos?.map(photo => <div key={photo.id}>
                    <div>{photo.title}</div>
                    <Image src={photo.url} width={500} height={ 500}/>
                </div>)

            }

        </div>
    )
}

export default Images