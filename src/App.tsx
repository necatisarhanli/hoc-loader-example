import "./styles.css";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { PostData } from "./post/type";
import List from "./list";
import React from "react";
import Header from "./header";
import News from "./news";
import { NewsData } from "./news/type";
export default function App() {
  const [postList, setPostList] = useState<Array<PostData>>();
  const [newsList, setNewsList] = useState<Array<NewsData>>();
  const [loading, setLoading] = useState<boolean>(false);

  const fakePostsFetchAPI = (): Promise<Array<PostData>> => {
    setLoading(true);
    return new Promise<Array<PostData>>((resolve) => {
      setTimeout(() => {
        resolve(
          Array(5)
            .fill(null)
            .map(() => {
              return {
                avatarSrc: faker.internet.avatar(),
                name: faker.name.firstName(),
                surname: faker.name.lastName(),
                message: faker.lorem.sentences(3),
                nickname: faker.internet.userName(),
              };
            })
        );
      }, 2000); // 2sec
    });
  };

  const fakeNewsFetchAPI = (): Promise<Array<NewsData>> => {
    setLoading(true);
    return new Promise<Array<NewsData>>((resolve) => {
      setTimeout(() => {
        resolve(
          Array(5)
            .fill(null)
            .map(() => {
              return {
                info: faker.music.genre(),
                name: faker.music.songName(),
                count: faker.datatype.number(),
              };
            })
        );
      }, 2500); // 2.5sec
    });
  };

  useEffect(() => {
    setLoading(true);
    Promise.all([fakePostsFetchAPI(), fakeNewsFetchAPI()])
      .then((responses) => {
        setPostList(responses[0]);
        setNewsList(responses[1]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <div className="left"></div>
      <div className="middle">
        <Header />
        <List data={postList} loading={loading} />
      </div>
      <div className="right">
        <News data={newsList} />
      </div>
    </div>
  );
}
