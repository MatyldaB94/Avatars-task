import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledLoading = styled.p`
font-size: 50px;
`

const Avatars = () => {
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentUserNameIndex, setCurrentUserNameIndex] = useState(0);
    const usernames = [
        "gaeron",
        "acdlite",
        "yyx990803",
        "unclebob",
        "martinfowler"
    ];

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const promises = usernames.map(async (username) => {
                const response = await fetch(
                    `https://api.github.com/users/${username}`
                );
                const data = await response.json();
                return data.avatar_url;
            });
            const avatars = await Promise.all(promises);
            setAvatars(avatars);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const onClickButtonPrevious = () => {
        if (currentUserNameIndex <= 0) {
            return
        }
        const newCurrentUserNameIndex = currentUserNameIndex - 1;
        setCurrentUserNameIndex(newCurrentUserNameIndex);
    }

    const onClickButtonNext = () => {
        if (currentUserNameIndex + 1 >= usernames.length) {
            return
        } const newCurrentUserNameIndex = currentUserNameIndex + 1
        setCurrentUserNameIndex(newCurrentUserNameIndex);
    }

    return isLoading ? <StyledLoading>Loading...</StyledLoading> : (
        <div>
            <img src={avatars[currentUserNameIndex]} alt={`${usernames[currentUserNameIndex]}'s avatar`} />
            <div>
                <button onClick={onClickButtonPrevious}>Previous</button>
                <button onClick={onClickButtonNext}>Next</button>
            </div>
        </div>
    )
};

export default Avatars;