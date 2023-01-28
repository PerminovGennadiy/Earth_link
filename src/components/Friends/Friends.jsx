import React from "react";
import cl from './Friends.module.css';
import AvatarNotSelected from '../../assets/images/AvatarNotSelected.png';
import { NavLink } from "react-router-dom";

let Friends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 7 < 0) {
        slicedPages = pages.slice(0, 11);
    } else {
        slicedPages = pages.slice(curPage - 6, curPage + 5);
    }
    return (
        <div>
            <div className={cl.pagination}>
                <div onClick={(e) => { props.onPageChanged(curPage, '--') }} className={cl.arrowContainer}><i className={`${cl.arrow} ${cl.arrowLeft}`}><div className={`${cl.arrow} ${cl.leftAll}`}></div></i></div>
                <div onClick={(e) => { props.onPageChanged(curPage, '-') }} className={cl.arrowContainer}><i className={`${cl.arrow} ${cl.arrowLeft}`}></i></div>
                {slicedPages.map(el => {
                    return <div className={`${cl.numberOfPages} ${props.currentPage === el && cl.selectedPage}`} onClick={(e) => { props.onPageChanged(el) }}>{el}</div>
                })}
                <div onClick={(e) => { props.onPageChanged(curPage, '+') }} className={cl.arrowContainer}><i className={`${cl.arrow} ${cl.arrowRight}`}></i></div>
                <div onClick={(e) => { props.onPageChanged(curPage, '++') }} className={cl.arrowContainer}><i className={`${cl.arrow} ${cl.arrowRight} ${cl.rightAll}`}><div className={`${cl.arrow} ${cl.rightAll}`}></div></i></div>
            </div>
            <div className={cl.containerAll}>
                {
                    props.users.map(el => <div key={el.id}>
                        <span className={cl.container}>
                            <div className={cl.containerAvatarFollow}>
                                <div>
                                    <NavLink to={`./../profile/${el.id}`}>
                                        <img src={el.photos.small != null ? el.photos.small : AvatarNotSelected} className={cl.userPhoto} />
                                    </NavLink>
                                </div>
                                <div>
                                    {el.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === el.id)} className={`${cl.btn} ${cl.unfollow}`}
                                            onClick={() => {props.unfollow(el.id);
                                        }}>Unfollow</button>

                                        : <button disabled={props.followingInProgress.some(id => id === el.id)} className={`${cl.btn} ${cl.follow}`}
                                            onClick={() => {props.follow(el.id);
                                            }}>Follow</button>}
                                </div>
                            </div>
                            <div className={cl.containerInfo}>
                                <div className={cl.containerNameStatus}>
                                    <NavLink to={'/profile'} className={cl.linkToProfile}><div className={cl.name}>{el.name}</div></NavLink>
                                    <div className={cl.status}>{el.status}</div>
                                </div>
                                <div className={cl.containerCountryCity}>
                                    <div className={cl.country}>{'el.location.country'}</div>
                                    <div className={cl.city}>{'el.location.city'}</div>
                                </div>
                            </div>
                        </span>
                    </div>)
                }
            </div>
            <div className={cl.buttonsContainer}>
                <button onClick={(e) => { props.onPageChanged(curPage, '-') }} className={`${cl.btn} ${cl.getUsers}`}>Previous page</button>
                <button onClick={(e) => { props.onPageChanged(curPage, '+') }} className={`${cl.btn} ${cl.getUsers}`}>Next page</button>
            </div>
        </div>
    );
};

export default Friends;