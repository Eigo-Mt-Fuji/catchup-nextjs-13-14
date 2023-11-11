type LoadMoreAction = (offset: number) => Promise<readonly [JSX.Element[], number | null]>;
export default LoadMoreAction;
