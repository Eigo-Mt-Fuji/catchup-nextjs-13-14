'use client';

// cannot import a Server Component into a Client Component: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
// Supported Pattern: Passing Server Components to Client Components as Props
// Event handlers cannot be passed to Client Component
export default (props: any) => {
    const onChange = (e: any) => {
        window.console.log()
    }
    return (
        <form action={props.create}>
            <input type="text" value="fuga" name="todo" onChange={onChange} />
            <button>送信</button>
        </form>
    );
}