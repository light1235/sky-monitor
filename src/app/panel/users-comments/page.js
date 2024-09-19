"use client"
import React, { useState } from 'react';
import './index.scss';
import CustomSearch from "@/components/panel/custom-search";
import UsersItemLine from "@/components/panel/users-item-line";
import CommentsItemLine from "@/components/panel/comments-item-line";
import CustomPagination from "@/components/panel/pagination";
import usePagination from "@/utils/hooks/usePagination";

const UsersComments = () => {
     const [users, setUsers] = useState([
          { id: 1, name: 'John Wick', block: false, registerDate: '18.07.2024' },
          { id: 2, name: 'Tony Sanders', block: false, registerDate: '12.05.2024' },
          { id: 3, name: 'Will Smith', block: false, registerDate: '08.03.2024' },
          { id: 4, name: 'Roger Daily', block: false, registerDate: '22.03.2024' },
     ]);

     const [comments, setComments] = useState([
          { id: 1, name: 'John Wick', context: 'This sentence captures the essence of Rewline\'s offering... dora' },
          { id: 2, name: 'Tony Sanders', context: 'This sentence captures the essence of Rewline\'s offering...' },
          { id: 3, name: 'Will Smith', context: 'This sentence captures the essence of Rewline\'s offering...' },
          { id: 4, name: 'Roger Daily', context: 'This sentence captures the essence of Rewline\'s offering...' },
          { id: 5, name: 'Sara Rogers', context: 'This sentence captures the essence of Rewline\'s offering...' },
     ]);

     const deleteComment = (commentId) => {
          setComments(comments.filter(comment => comment.id !== commentId));
     };

     const [searchTermComment, setSearchTermComment] = useState('');
     const filteredComments = comments.filter(comment =>
          comment.context.toLowerCase().includes(searchTermComment.toLowerCase())
     );

     const [searchTerm, setSearchTerm] = useState('');
     const filteredUsers = users.filter(user =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
     );

     const handleBlockUser = (userId) => {
          setUsers(users.map(user =>
               user.id === userId ? { ...user, block: !user.block } : user
          ));
     };

     const itemsPerPage = 2;

     const { currentItems: paginatedUsers, handlePageChange: handlePageChangeUsers, currentPage: currentPageUsers } = usePagination(filteredUsers, itemsPerPage, searchTerm);
     const { currentItems: paginatedComments, handlePageChange: handlePageChangeComments, currentPage: currentPageComments, totalItems } = usePagination(filteredComments, itemsPerPage, searchTermComment);

     return (
          <div className="users-admin">
               <div className="page-top-bar">
                    <h2>Users & Comments</h2>
               </div>
               <div className="table-container">
                    <div>
                         <div className="page-data-table table-users">
                              <div className="table-search">
                                   <CustomSearch onSearch={e => setSearchTerm(e.target.value)}/>
                              </div>
                              <div className="table-top">
                                   <p>User Name</p>
                                   <p>Register Date</p>
                              </div>
                              {paginatedUsers.map((item, index) =>
                                   <UsersItemLine
                                        onBlockClick={() => handleBlockUser(item.id)}
                                        back={index % 2 === 0 ? " " : "#FCFCFD"}
                                        item={item}
                                        key={item.id}
                                   />
                              )}
                         </div>
                    </div>
                    <div>
                         <div className="page-data-table data-comments">
                              <div className="table-search">
                                   <CustomSearch onSearch={e => setSearchTermComment(e.target.value)}/>
                              </div>
                              <div className="table-top">
                                   <p>User Name</p>
                                   <p>Register Date</p>
                              </div>
                              {paginatedComments.map((item, index) =>
                                   <CommentsItemLine deleteCom={deleteComment} back={index % 2 === 0 ? " " : "#FCFCFD"}
                                                     item={item} key={item.id}/>
                              )}
                         </div>

                    </div>

               </div>
               <div className="pagination-wrap">
                    <div>
                         <CustomPagination
                              current={currentPageUsers}
                              total={filteredUsers.length}
                              pageSize={itemsPerPage}
                              onChange={handlePageChangeUsers}
                         />
                    </div>
                    <div>
                         <CustomPagination
                              current={currentPageComments}
                              total={totalItems}
                              pageSize={itemsPerPage}
                              onChange={handlePageChangeComments}
                         />
                    </div>
               </div>
          </div>
     );
};

export default UsersComments;
