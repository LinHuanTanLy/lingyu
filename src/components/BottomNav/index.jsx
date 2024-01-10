import "./style.less"
import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const BottomNav = () => {

    return (
        <div className={"nav-footer"}>
            <ul>
                <li>
                    <NavLink exact to="/"  activeClassName="active">
                        <i className="iconfont icon-CBB-baohu"></i>
                        首页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/live" activeClassName="active">
                        <i className="iconfont icon-CBB-gaoyong"></i>
                        书影音
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/group" activeClassName="active">
                        <i className="iconfont icon-CBB-douyinlogo"></i>
                        小组
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shop" activeClassName="active">
                        <i className="iconfont icon-CBB-fensiguanli"></i>
                        市集
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/mine" activeClassName="active">
                        <i className="iconfont icon-CBB-wode"></i>
                        我的
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default BottomNav