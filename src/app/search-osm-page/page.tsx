import Image from 'next/image'
import styles from './page.module.css'
import { redirect } from 'next/navigation'
import { revalidatePath, revalidateTag } from 'next/cache'
import Component from '@/components/applications/sample/index'
import MyForm from '@/components/applications/myform/index'
import DnDForm from '@/components/applications/dndform'
async function searchOSM(q: string) {
  // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
  // https://nextjs.org/docs/app/building-your-application/data-fetching/patterns#fetching-data-where-its-needed
  // Next.js extends the native fetch Web API to allow you to configure the caching and revalidating behavior for each fetch request on the server. React extends fetch to automatically memoize fetch requests while rendering a React component tree.
  // Next.js provides helpful functions you may need when fetching data in Server Components such as cookies and headers. These will cause the route to be dynamically rendered as they rely on request time information.
  const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${q}&format=json`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
// Server Actions: asynchronous server functions that can be called directly from your components
// Server Actions can be defined in Server Components or called from Client Components. 
// Defining the action in a Server Component allows the form to function without JavaScript, providing progressive enhancement.
// Progressive Enhancement: 核となるコンテンツを最重要視するウェブデザイン戦略. プレゼンテーション面や機能面で微妙に異なる内容や技術的に困難な内容をコンテンツに漸次追加していく. エンドユーザーのブラウザーやインターネット接続に合わせて追加していく.

async function createItem(todo: string) {
  console.log(`createItem: ${todo}`)
}
// 「app」ディレクトリ: App Router built on React Server Components
//  The app directory works alongside the pages directory to allow for incremental adoption. 
// This allows you to opt some routes of your application into the new behavior while keeping other routes in the pages directory for previous behavior. If your application uses the pages directory, please also see the Pages Router documentation
export default async function SamplePage() {
  let message = ""

  async function create(formData: FormData) {
    'use server'
    try {
      var todo: FormDataEntryValue = ""
      if (typeof formData.get('todo') == "string") {
        todo = formData.get('todo') as string
      }
      // mutate data
      await createItem(todo)
      // revalidate cache
      revalidatePath('/')
      // redirect
      redirect(`/search-osm-page/`) 
    } catch (e) {
      return { message: 'Failed to create' }
    }
  }

  // You can use fetch with async/await in Server Components, in Route Handlers, and in Server Actions.
  // To use async/await in a Server Component with TypeScript, you'll need to use TypeScript 5.1.3 or higher and @types/react 18.2.8 or higher.
  const data = await searchOSM("渋谷駅")
  const lat: number = data[0]["lat"]
  const lon: number = data[0]["lon"]

  /** Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. at input at form at main */
  return (
    <main className={styles.main}>
      <MyForm/>
      <Component />
      <DnDForm></DnDForm>
      <div>{message}</div>
      <div className={styles.description}>
        <span>Lat: </span><span>{lat}</span><span>,</span><span>Lon: </span><span>{lon}</span>
      </div>
    </main>
  )
}
