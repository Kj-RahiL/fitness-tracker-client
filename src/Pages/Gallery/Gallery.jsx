import { useInfiniteQuery } from "@tanstack/react-query";
import Cover from "../../Components/Shared/Cover";
import InfiniteScroll from 'react-infinite-scroll-component';
import { Helmet } from "react-helmet-async";

const getArticles = async ({ pageParam = 0 }) => {
    const res = await fetch(`/gallery.json?limit=10&offset=${pageParam}`);
    const data = await res.json();

    return { ...data, prevOffset: pageParam }


}
const Gallery = () => {
    const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: ["articles"],
        queryFn: getArticles,
        getNextPageParam: (lastPage) => {
            if (lastPage.prevOffset + 10 > lastPage.articlesCount) {
                return false;
            }
            return lastPage.prevOffset + 10;
        }

    })
    // console.log('data 1st',data)

    const articles = data?.pages.reduce((acc, page) => {
        return [...acc, ...page.articles]
    }, [])

    // console.log('article',articles)
    return (
        <div>
            <Helmet>
                <title>FIT TO HIT | Gallery</title>
            </Helmet>
            <Cover text='Visit Our' title='Gallery'></Cover>
            <div>
                <InfiniteScroll
                    dataLength={articles ? articles.length : 0}
                    next={() => fetchNextPage()}
                    hasMore={hasNextPage}
                    loading={<div className="skeleton h-4 w-full"></div>}
                >
                    <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
                        {articles &&
                            articles.map((article, idx) => {
                                return (
                                    <div key={idx} className="card bg-black text-white shadow-md shadow-amber-500 relative overflow-hidden">
                                        <figure className="h-[430px]">
                                            <img src={article.image} alt="Shoes" className="rounded-xl h-full" />
                                        </figure>
                                        <div className="card-body items-center text-center absolute top-0 left-0 w-full h-full pt-14 bg-opacity-50 bg-black opacity-0 hover:opacity-100 transition-opacity duration-300">
                                            <h3>{article.title}</h3>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>

                </InfiniteScroll>
            </div>
        </div>
    );
};

export default Gallery;