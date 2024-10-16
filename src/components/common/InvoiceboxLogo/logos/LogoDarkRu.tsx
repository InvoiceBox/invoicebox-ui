import React, { FC } from 'react';

type TProps = {
    width: number;
    height?: number;
};

const LogoDarkRu: FC<TProps> = ({ width, height }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 123 26"
            fill="none"
        >
            <path
                d="M87.9 17.0945C82.4976 22.3368 75.0504 25.2916 67.6464 25.1547C60.2382 25.0884 52.9751 21.8905 47.9438 16.5518C47.6458 16.2393 47.6556 15.7427 47.9658 15.4419C48.2687 15.1484 48.7508 15.1558 49.05 15.4468C53.985 20.3072 60.8416 22.99 67.6391 22.8003C74.4421 22.6702 81.0519 19.7234 85.7059 14.8654C86.3032 14.2416 87.2899 14.2238 87.9092 14.8261C88.5284 15.4284 88.5461 16.4217 87.9482 17.046C87.9366 17.0583 87.9244 17.07 87.9122 17.0817L87.9 17.0945Z"
                fill="#FAD247"
            />
            <path
                d="M93.4352 5.32919C95.3636 5.32919 96.9324 6.90943 96.9324 8.85188C96.9324 10.7943 95.3636 12.3746 93.4352 12.3746C91.5068 12.3746 89.938 10.7943 89.938 8.85188C89.938 6.90943 91.5068 5.32919 93.4352 5.32919ZM93.4352 2.60645C90.0105 2.60645 87.2344 5.40287 87.2344 8.8525C87.2344 12.3021 90.0105 15.0986 93.4352 15.0986C96.8599 15.0986 99.636 12.3021 99.636 8.8525C99.636 5.40287 96.8599 2.60645 93.4352 2.60645Z"
                fill="#FAD247"
            />
            <path
                d="M0.855469 1.67725H3.86629V10.2648L10.111 1.67725H12.953V14.86H9.96168V6.29149L3.71575 14.86H0.855469V1.67725Z"
                fill="#353F47"
            />
            <path
                d="M15.7734 4.72729H18.6721V8.68219H23.0463V4.72729H25.9633V14.8595H23.0463V11.074H18.6721V14.8595H15.7734V4.72729Z"
                fill="#353F47"
            />
            <path
                d="M38.125 11.9783C38.125 12.8949 37.7812 13.6046 37.0962 14.1062C36.4117 14.6084 35.389 14.8595 34.0305 14.8595H28.6641V4.72729H33.8068C35.0636 4.72729 36.0497 4.95629 36.7604 5.41489C37.471 5.87288 37.8257 6.51688 37.8257 7.34506C37.8257 7.84787 37.6977 8.28989 37.4436 8.67298C37.1882 9.05607 36.8225 9.35443 36.3484 9.56746C37.5314 9.96958 38.125 10.7726 38.125 11.9783ZM31.3391 8.88908H33.5454C34.5662 8.88908 35.0776 8.52502 35.0776 7.79691C35.0776 7.08108 34.5662 6.72316 33.5454 6.72316H31.3391V8.88908ZM35.3951 11.7524C35.3951 11.3632 35.2702 11.0771 35.0209 10.8954C34.7716 10.713 34.3791 10.6216 33.8434 10.6216H31.3391V12.863H33.7873C34.8594 12.8636 35.3951 12.4934 35.3951 11.7524Z"
                fill="#353F47"
            />
            <path
                d="M50.9844 4.72671H53.8831V10.753L58.7808 4.72671H61.4558V14.8589H58.5571V8.83262L53.6777 14.8589H50.9844V4.72671ZM52.725 0.715332H54.6315C54.6437 1.1549 54.7637 1.49686 54.9953 1.74243C55.2263 1.98677 55.5658 2.10955 56.015 2.10955C56.4642 2.10955 56.8092 1.98677 57.0529 1.74243C57.2961 1.49747 57.418 1.15551 57.418 0.715332H59.3623C59.3501 2.66147 58.2396 3.63515 56.0333 3.63515C53.8386 3.63454 52.7372 2.66147 52.725 0.715332Z"
                fill="#353F47"
            />
            <path
                d="M66.181 14.341C65.3259 13.8959 64.6598 13.2771 64.1789 12.4857C63.6999 11.695 63.4609 10.7974 63.4609 9.79304C63.4609 8.78866 63.6999 7.89111 64.1789 7.10037C64.6598 6.30903 65.3259 5.69142 66.181 5.2451C67.0331 4.8 67.9961 4.57715 69.0687 4.57715C70.128 4.57715 71.0526 4.8 71.8443 5.2451C72.6354 5.69081 73.2138 6.32806 73.574 7.15624L71.3116 8.38102C70.7881 7.45215 70.0336 6.9868 69.0505 6.9868C68.2898 6.9868 67.6596 7.23789 67.1605 7.74008C66.6613 8.24288 66.4133 8.9268 66.4133 9.79304C66.4133 10.6599 66.6613 11.3438 67.1605 11.846C67.6596 12.3482 68.2892 12.5993 69.0505 12.5993C70.047 12.5993 70.8003 12.1352 71.3116 11.2051L73.574 12.4483C73.2132 13.2519 72.6354 13.8799 71.8443 14.3318C71.0532 14.7836 70.128 15.0102 69.0687 15.0102C67.9961 15.0102 67.0331 14.7873 66.181 14.341Z"
                fill="#353F47"
            />
            <path
                d="M83.7876 6.01754C84.5086 6.41291 85.0687 6.96851 85.4612 7.68434C85.8537 8.39956 86.0487 9.22836 86.0487 10.1701C86.0487 11.1364 85.8159 11.9941 85.349 12.7406C84.8804 13.4878 84.2294 14.0655 83.3957 14.4731C82.5589 14.8807 81.6123 15.0852 80.5537 15.0852C78.7947 15.0852 77.4161 14.5173 76.4123 13.3809C75.4085 12.2446 74.9062 10.5778 74.9062 8.38053C74.9062 6.3466 75.3475 4.72339 76.2252 3.51212C77.1028 2.30085 78.4528 1.50643 80.2739 1.12948L85.0583 0.169922L85.4508 2.69315L81.2253 3.54097C80.0783 3.7669 79.2274 4.14323 78.6734 4.67059C78.1182 5.19857 77.7909 5.9451 77.6922 6.91203C78.1273 6.43439 78.6509 6.06727 79.2622 5.81003C79.8723 5.55341 80.5403 5.42388 81.2613 5.42388C82.2236 5.42388 83.0635 5.62156 83.7876 6.01754ZM82.376 12.0721C82.8295 11.5821 83.0574 10.9609 83.0574 10.2076C83.0574 9.442 82.8295 8.83299 82.376 8.38053C81.9195 7.92868 81.3198 7.70215 80.5713 7.70215C79.8107 7.70215 79.2006 7.92807 78.7393 8.38053C78.2767 8.83238 78.0469 9.442 78.0469 10.2076C78.0469 10.9731 78.2828 11.5987 78.7575 12.0813C79.2323 12.565 79.8345 12.8063 80.5713 12.8063C81.3198 12.8063 81.9195 12.562 82.376 12.0721Z"
                fill="#353F47"
            />
            <path
                d="M105.624 11.0176H104.108V14.8601H101.191V4.72729H104.108V8.66316H105.678L108.408 4.72729H111.512L107.997 9.5865L111.755 14.8595H108.316L105.624 11.0176Z"
                fill="#353F47"
            />
            <path
                d="M114.748 14.341C113.894 13.8959 113.228 13.2771 112.747 12.4857C112.266 11.695 112.027 10.7974 112.027 9.79304C112.027 8.78866 112.266 7.89111 112.747 7.10037C113.228 6.30903 113.894 5.69142 114.748 5.2451C115.602 4.8 116.563 4.57715 117.638 4.57715C118.697 4.57715 119.621 4.8 120.413 5.2451C121.204 5.69081 121.781 6.32806 122.142 7.15624L119.88 8.38102C119.357 7.45215 118.602 6.9868 117.618 6.9868C116.859 6.9868 116.229 7.23789 115.73 7.74008C115.231 8.24288 114.981 8.9268 114.981 9.79304C114.981 10.6599 115.231 11.3438 115.73 11.846C116.229 12.3482 116.859 12.5993 117.618 12.5993C118.615 12.5993 119.369 12.1352 119.88 11.2051L122.141 12.4483C121.78 13.2519 121.204 13.8799 120.413 14.3318C119.621 14.7836 118.696 15.0102 117.637 15.0102C116.563 15.0102 115.601 14.7873 114.748 14.341Z"
                fill="#353F47"
            />
            <path
                d="M44.3188 8.13887C45.5627 8.13887 46.5744 9.15799 46.5744 10.411C46.5744 11.664 45.5627 12.6831 44.3188 12.6831C43.0748 12.6831 42.0631 11.664 42.0631 10.411C42.0631 9.15799 43.0748 8.13887 44.3188 8.13887ZM44.3188 5.62793C41.6962 5.62793 39.5703 7.76929 39.5703 10.4116C39.5703 13.0539 41.6962 15.1953 44.3188 15.1953C46.9413 15.1953 49.0672 13.0539 49.0672 10.4116C49.0672 7.76929 46.9413 5.62793 44.3188 5.62793Z"
                fill="#353F47"
            />
        </svg>
    );
};

export default LogoDarkRu;
