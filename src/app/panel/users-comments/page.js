"use client"

import React, {useState} from 'react';
import './index.scss'
import CustomSearch from "@/components/panel/custom-search";
import UsersItemLine from "@/components/panel/users-item-line";
import CommentsItemLine from "@/components/panel/comments-item-line";

const UsersComments = () => {
     const [users, setUsers] = useState([
          {
               id: 1,
               name: 'John Wick\n' + '\n',
               block: false,
               registerDate: '18.07.2024',
          },
          {
               id: 2,
               name: 'Tony Sanders',
               block: false,
               registerDate: '12.05.2024',
          },
          {
               id: 3,
               name: 'Will Smith',
               block: false,
               registerDate: '08.03.2024',
          },
          {
               id: 4,
               name: 'Roger Daily',
               block: false,
               registerDate: '22.03.2024',
          },
     ]);

     const [comments, setComments] = useState([
          {
               id: 1,
               name: 'John Wick\n' + '\n',
               context: 'This sentence captures the essence of Rewline\'s offering by emphasizing their AI expertise, data-driven insights, and the ability to empower traders to make informed decisions.\n' +
                    '\n',
          },
          {
               id: 2,
               name: 'Tony Sanders',
               context: 'This sentence captures the essence of Rewline\'s offering by emphasizing their AI expertise, data-driven insights, and the ability to empower traders to make informed decisions.\n' +
                    '\n',
          },
          {
               id: 3,
               name: 'Will Smith',
               context: 'This sentence captures the essence of Rewline\'s offering by emphasizing their AI expertise, data-driven insights, and the ability to empower traders to make informed decisions.\n' +
                    '\n',
          },
          {
               id: 4,
               name: 'Roger Daily',
               context: 'This sentence captures the essence of Rewline\'s offering by emphasizing their AI expertise, data-driven insights, and the ability to empower traders to make informed decisions.\n' +
                    '\n',
          },
          {
               id: 5,
               name: 'Sara Rogers',
               context: 'This sentence captures the essence of Rewline\'s offering by emphasizing their AI expertise, data-driven insights, and the ability to empower traders to make informed decisions.\n' +
                    '\n',
          },
     ]);

     const deleteComment = (commentId) => {
          // Filter comments to exclude the one being deleted
          const updatedComments = comments.filter((comment) => comment.id !== commentId);
          // Update state with the filtered comments
          setComments(updatedComments);
     };

     const [searchTermComment, setSearchTermComment] = useState('');
     const filteredUsersComment = comments.filter(user =>
          user.context.toLowerCase().includes(searchTermComment.toLowerCase())
     );






     const handleBlockUser = (userId) => {
          setUsers((prevUsers) =>
               prevUsers.map((user) =>
                    user.id === userId ? { ...user, block: !user.block } : user
               )
          );
     };

     const [searchTerm, setSearchTerm] = useState('');
     const filteredUsers = users.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
     );

     const handleSearch = (event) => {
          setSearchTerm(event.target.value);
     };
     const handleSearchComments = (event) => {
          setSearchTermComment(event.target.value);
     };

     return (
          <div className="users-admin">
               <div className="page-top-bar">
                    <h2>Users & Comments</h2>
               </div>
               <div className="table-container">
                    <div className="page-data-table table-users">
                         <div className="table-search">
                              <CustomSearch onSearch={handleSearch} />
                         </div>
                         <div className="table-top">
                              <p>User Name</p>
                              <p>Register Date</p>
                         </div>
                         {filteredUsers.map((item, index) =>
                              <UsersItemLine
                                   onBlockClick={() => handleBlockUser(item.id)}
                                   back={index % 2 === 0 ? " " : "#FCFCFD"}
                                   item={item}
                                   key={item.id}
                              />
                         )}

                    </div>
                    <div className="page-data-table data-comments">
                         <div className="table-search">
                              <CustomSearch onSearch={handleSearchComments}/>
                         </div>
                         <div className="table-top">
                              <p>User Name</p>
                              <p>Register Date</p>
                         </div>
                         {filteredUsersComment.map(( item,index) =>
                              <CommentsItemLine deleteCom={deleteComment}  back={index % 2 === 0 ? " " : "#FCFCFD"}  item={item} key={item.id} />
                         )}


                    </div>
               </div>

          </div>
     );
};

export default UsersComments;
