'use client';
// https://nextjs.org/docs/messages/next-router-not-mounted 
import { useParams } from 'next/navigation'

export default function PostDetailPage() {
  const params = useParams()
  let message = "post"

  /** Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. at input at form at main */
  return (
    <main>
      <div>{message} {params.id}</div>
    </main>
  )
}
