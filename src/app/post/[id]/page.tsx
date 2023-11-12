'use client';

import { useRouter } from 'next/router'

export default function PostDetailPage() {
  const router = useRouter()
  let message = "post"

  /** Warning: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. at input at form at main */
  return (
    <main>
      <div>{message} {router.query.id}</div>
    </main>
  )
}
