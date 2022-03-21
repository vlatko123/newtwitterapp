import React from 'react';
import { SingleNotification } from './SingleNotification';

export const All = () => {
    return(
        <div>
            <SingleNotification notificationHeading='Mark Ruffalo retweeted a photo from Tom Holland' notificationContent='Awesome spiderman movie' />
        </div>
    )
}