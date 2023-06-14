import React, {useState, useEffect} from 'react'
import {  Avatar, Button, List, Skeleton } from 'antd'
import { Link } from "react-router-dom";
import { useLazyGetUsersQuery } from '../../redux/randomUsersApi';
import './UsersTable.css'

function UsersTable() {
  const count = 10;
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
    <div className="users-table__wrapper">
      <h1 className='users-table__title'>Random Users</h1>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[<Link to={'user/' + item.cell} state={{ from: item}} key="list-loadmore-more">More</Link>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={[<Link to={'user/' + item.cell} state={{ from: item}} key="list-loadmore-more">{item.name?.first} {item.name?.last}</Link>]}
                description={item.location?.country}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};


export default UsersTable