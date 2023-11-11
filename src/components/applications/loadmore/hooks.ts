'use client';
import LoadMoreAction from '@/types/load-more-action';
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    SyntheticEvent,
} from 'react';
  
export function useLoadMore({ initialOffset, loadMoreAction }: {initialOffset: number; loadMoreAction: LoadMoreAction}) : any{
    const ref = useRef<HTMLButtonElement>(null);
    const [loadMoreNodes, setLoadMoreNodes] = useState<JSX.Element[]>([]);
    const [loading, setLoading] = useState(false);
    const [allDataLoaded, setAllDataLoaded] = useState(false);
  
    // 現在のオフセット
    const currentOffsetRef = useRef<number | undefined>(initialOffset);
  
    const [open, setOpen] = useState(false);
  
    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    // 新しいデータを取得する関数
    const loadMore = useCallback(
      async (abortController?: AbortController) => {
        setLoading(true);
  
        setTimeout(async () => {
          // 重複データの取得を防ぐためのチェック
          if (currentOffsetRef.current === undefined) {
            setLoading(false);
            return;
          }
  
          loadMoreAction(currentOffsetRef.current)
            .then(([node, next]) => {
              // リクエストが中断された場合は早期リターン
              if (abortController?.signal.aborted) return;
  
              // 全てのデータを取得したかどうかのチェック
              if (node.length < 10) {
                setAllDataLoaded(true);
              }
  
              //　新しいデータを追加する
              setLoadMoreNodes((prev) => [...prev, ...node]);
              if (next === null) {
                currentOffsetRef.current = undefined;
                return;
              }
  
              currentOffsetRef.current = next;
            })
            .catch((e) => {
              console.log(e);
              setOpen(true);
            })
            .finally(() => setLoading(false));
        }, 800);
      },
      // TODO: useCallback関数のDependencyListの最低限必要要素を知りたい
      [loadMoreAction, setAllDataLoaded, setLoadMoreNodes, setOpen, setLoading]
    );
  
    useEffect(() => {
      const abortController = new AbortController();
  
      const element = ref.current;
  
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && element?.disabled === false) {
          loadMore(abortController);
        }
      });
  
      if (element) {
        observer.observe(element);
      }
  
      return () => {
        abortController.abort();
        if (element) {
          observer.unobserve(element);
        }
      };
    }, [loadMore]);
    return {
        ref,
        loadMoreNodes, 
        loading, 
        allDataLoaded,
        currentOffsetRef,
        open, 
        handleClose,
        loadMore
    };
}
