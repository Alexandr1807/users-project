import React, {useState, useEffect} from 'react'
import {  Avatar, Button, List, Skeleton } from 'antd'
import { Link } from "react-router-dom";
import { useLazyGetUsersQuery } from '../../redux/randomUsersApi';

function UsersTable() {
  const count = 5;
  const [getUsers] = useLazyGetUsersQuery();
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  
  useEffect( () => {
    getUsers(count)
    .unwrap()
    .then((fulfilled) => {
      setList(fulfilled.results)
      setInitLoading(false)
    })
    .catch((rejected) => console.error(rejected));
  }, [])

  const onLoadMore = () => {
    setLoading(true);
    setList(
      list.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        })),
      ),
    );

    getUsers(count)
    .unwrap()
    .then((fulfilled) => {
      setList(list.concat(fulfilled.results))
      setLoading(false);
      window.dispatchEvent(new Event('resize'));
    })
    .catch((rejected) => console.error(rejected));
  }

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>More</Button>
      </div>
    ) : null;

  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<Link to='/profile' state={{ from: item}} key="list-loadmore-more">More</Link>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name?.first} {item.name?.last}</a>}
              description={item.location?.country}
            />
          </Skeleton>
        </List.Item>
      )}
    />
  );
};


export default UsersTable