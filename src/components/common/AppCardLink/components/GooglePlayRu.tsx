import React, { FC } from 'react';
import { TAppCardProps } from '../constants';

const GooglePlayRu: FC<TAppCardProps> = ({ height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 0 81 24" fill="none">
            <path
                d="M78 0H3C1.34315 0 0 1.34315 0 3V21C0 22.6569 1.34315 24 3 24H78C79.6569 24 81 22.6569 81 21V3C81 1.34315 79.6569 0 78 0Z"
                fill="#353F47"
            />
            <path
                d="M78 0.48C78.6679 0.481584 79.3079 0.747593 79.7802 1.21984C80.2524 1.69209 80.5184 2.33214 80.52 3V21C80.52 21.3309 80.4548 21.6586 80.3282 21.9644C80.2015 22.2701 80.0159 22.5479 79.7819 22.7819C79.5479 23.0159 79.2701 23.2015 78.9644 23.3282C78.6586 23.4548 78.3309 23.52 78 23.52H3C2.33214 23.5184 1.69209 23.2524 1.21984 22.7802C0.747595 22.3079 0.481586 21.6679 0.480002 21V3C0.481586 2.33214 0.747595 1.69209 1.21984 1.21984C1.69209 0.747593 2.33214 0.481584 3 0.48H78ZM78 0H3C2.20435 0 1.44129 0.316071 0.878682 0.87868C0.316073 1.44129 0 2.20435 0 3V21C0 21.7957 0.316073 22.5587 0.878682 23.1213C1.44129 23.6839 2.20435 24 3 24H78C78.7957 24 79.5587 23.6839 80.1213 23.1213C80.6839 22.5587 81 21.7957 81 21V3C81 2.20435 80.6839 1.44129 80.1213 0.87868C79.5587 0.316071 78.7957 0 78 0Z"
                fill="#A6A6A6"
            />
            <path
                d="M40.8853 13.0562C40.5481 13.0497 40.213 13.1111 39.9 13.2368C39.5871 13.3625 39.3026 13.5499 39.0635 13.7879C38.8245 14.0258 38.6358 14.3094 38.5086 14.6218C38.3814 14.9341 38.3184 15.2689 38.3233 15.6062C38.3192 15.9432 38.3828 16.2776 38.5103 16.5896C38.6377 16.9016 38.8265 17.1848 39.0654 17.4226C39.3043 17.6604 39.5884 17.8478 39.901 17.9738C40.2136 18.0998 40.5483 18.1618 40.8853 18.1562C41.2223 18.1618 41.557 18.0998 41.8696 17.9738C42.1822 17.8478 42.4663 17.6604 42.7052 17.4226C42.9441 17.1848 43.1328 16.9016 43.2603 16.5896C43.3878 16.2776 43.4513 15.9432 43.4473 15.6062C43.4522 15.2689 43.3892 14.9341 43.262 14.6218C43.1348 14.3094 42.9461 14.0258 42.707 13.7879C42.468 13.5499 42.1835 13.3625 41.8705 13.2368C41.5576 13.1111 41.2225 13.0497 40.8853 13.0562ZM40.8853 17.1542C40.6883 17.1496 40.4942 17.1056 40.3145 17.0249C40.1347 16.9441 39.973 16.8281 39.8388 16.6839C39.7046 16.5396 39.6006 16.3699 39.533 16.1848C39.4655 15.9997 39.4356 15.803 39.4453 15.6062C39.4348 15.4092 39.464 15.2121 39.5313 15.0266C39.5986 14.8411 39.7025 14.6711 39.8369 14.5267C39.9713 14.3822 40.1333 14.2663 40.3134 14.1858C40.4936 14.1053 40.688 14.0619 40.8853 14.0582C41.0846 14.0587 41.2817 14.0997 41.4646 14.1788C41.6475 14.2579 41.8124 14.3733 41.9494 14.5181C42.0863 14.6629 42.1924 14.834 42.2611 15.021C42.3299 15.2081 42.3599 15.4072 42.3493 15.6062C42.359 15.805 42.3284 16.0037 42.2593 16.1903C42.1903 16.377 42.0842 16.5478 41.9474 16.6924C41.8107 16.837 41.6461 16.9524 41.4635 17.0318C41.281 17.1112 41.0843 17.1528 40.8853 17.1542ZM35.2933 13.0562C34.9573 13.0513 34.6239 13.114 34.3126 13.2405C34.0014 13.367 33.7187 13.5547 33.4814 13.7926C33.2441 14.0304 33.057 14.3135 32.9313 14.6251C32.8055 14.9366 32.7436 15.2702 32.7493 15.6062C32.7444 15.9429 32.8072 16.2772 32.934 16.5891C33.0608 16.9011 33.249 17.1844 33.4874 17.4223C33.7258 17.6601 34.0096 17.8476 34.3219 17.9737C34.6342 18.0998 34.9686 18.1618 35.3053 18.1562C35.6425 18.1626 35.9776 18.1012 36.2905 17.9755C36.6035 17.8498 36.888 17.6624 37.127 17.4245C37.3661 17.1865 37.5548 16.9029 37.682 16.5906C37.8092 16.2782 37.8722 15.9434 37.8673 15.6062C37.8731 15.2677 37.8103 14.9315 37.6827 14.6179C37.555 14.3043 37.3653 14.0198 37.1247 13.7816C36.8842 13.5433 36.598 13.3562 36.2832 13.2315C35.9685 13.1069 35.6317 13.0472 35.2933 13.0562ZM35.2933 17.1542C35.0965 17.1488 34.9028 17.1043 34.7235 17.0232C34.5441 16.9422 34.3827 16.8262 34.2487 16.6821C34.1146 16.538 34.0106 16.3686 33.9427 16.1839C33.8749 15.9992 33.8444 15.8028 33.8533 15.6062C33.8436 15.4094 33.8735 15.2126 33.941 15.0275C34.0086 14.8424 34.1126 14.6727 34.2468 14.5285C34.381 14.3842 34.5427 14.2682 34.7225 14.1875C34.9022 14.1067 35.0963 14.0627 35.2933 14.0582C35.4905 14.0619 35.685 14.1053 35.8651 14.1858C36.0452 14.2663 36.2073 14.3822 36.3417 14.5267C36.4761 14.6711 36.58 14.8411 36.6473 15.0266C36.7145 15.2121 36.7438 15.4092 36.7333 15.6062C36.7429 15.803 36.7131 15.9997 36.6455 16.1848C36.5779 16.3699 36.474 16.5396 36.3398 16.6839C36.2056 16.8281 36.0438 16.9441 35.8641 17.0249C35.6844 17.1056 35.4903 17.1496 35.2933 17.1542ZM28.6513 13.8362V14.9222H31.2373C31.1966 15.4308 30.9852 15.9108 30.6373 16.2842C30.3773 16.5474 30.0654 16.7537 29.7215 16.8901C29.3775 17.0264 29.009 17.0898 28.6393 17.0762C28.2628 17.0762 27.89 17.0015 27.5426 16.8563C27.1951 16.7111 26.88 16.4984 26.6154 16.2305C26.3509 15.9626 26.1421 15.6448 26.0013 15.2956C25.8606 14.9464 25.7905 14.5727 25.7953 14.1962C25.7905 13.8197 25.8606 13.446 26.0013 13.0967C26.1421 12.7475 26.3509 12.4297 26.6154 12.1618C26.88 11.8939 27.1951 11.6812 27.5426 11.536C27.89 11.3909 28.2628 11.3161 28.6393 11.3162C29.3649 11.3065 30.0652 11.5823 30.5893 12.0842L31.3513 11.3222C30.9946 10.9689 30.571 10.6904 30.1053 10.5029C29.6396 10.3154 29.1412 10.2227 28.6393 10.2302C27.5814 10.2285 26.5654 10.6439 25.8118 11.3863C25.0581 12.1287 24.6275 13.1383 24.6133 14.1962C24.6275 15.2534 25.0583 16.2624 25.8121 17.0039C26.566 17.7453 27.5819 18.1594 28.6393 18.1562C29.1519 18.1785 29.6633 18.091 30.1393 17.8996C30.6153 17.7081 31.0449 17.4172 31.3993 17.0462C32.0363 16.3619 32.3789 15.4547 32.3533 14.5202C32.3539 14.2928 32.3338 14.0659 32.2933 13.8422L28.6513 13.8362ZM55.8313 14.6762C55.6783 14.2142 55.3864 13.8106 54.9955 13.5207C54.6046 13.2308 54.1338 13.0685 53.6473 13.0562C53.3191 13.0555 52.9942 13.1222 52.6928 13.2521C52.3914 13.382 52.1198 13.5723 51.8949 13.8113C51.67 14.0503 51.4964 14.3329 51.385 14.6416C51.2737 14.9503 51.2268 15.2786 51.2473 15.6062C51.2409 15.9387 51.3009 16.2693 51.4238 16.5784C51.5467 16.8875 51.7299 17.169 51.9629 17.4065C52.1959 17.6439 52.4739 17.8325 52.7806 17.9612C53.0873 18.0899 53.4166 18.1562 53.7493 18.1562C54.1698 18.1583 54.5843 18.0565 54.956 17.8597C55.3276 17.6629 55.6448 17.3772 55.8793 17.0282L55.0093 16.4282C54.8803 16.648 54.6962 16.8306 54.4753 16.9579C54.2544 17.0852 54.0042 17.1528 53.7493 17.1542C53.4956 17.1561 53.2469 17.0838 53.0337 16.9463C52.8205 16.8088 52.6522 16.612 52.5493 16.3802L55.9633 14.9702L55.8313 14.6762ZM52.3513 15.5282C52.34 15.3423 52.3657 15.156 52.4271 14.9802C52.4884 14.8043 52.5842 14.6424 52.7087 14.504C52.8332 14.3655 52.984 14.2532 53.1524 14.1735C53.3207 14.0939 53.5032 14.0486 53.6893 14.0402C53.8828 14.0274 54.0758 14.0718 54.2444 14.1678C54.4129 14.2638 54.5495 14.4072 54.6373 14.5802L52.3513 15.5282ZM49.5793 18.0002H50.7013V10.5002H49.5793V18.0002ZM47.7493 13.6262H47.7073C47.5355 13.4425 47.3271 13.297 47.0957 13.1988C46.8642 13.1006 46.6147 13.052 46.3633 13.0562C45.7022 13.0781 45.076 13.3578 44.6185 13.8354C44.1611 14.3131 43.9087 14.9508 43.9153 15.6122C43.9103 16.2719 44.1636 16.9074 44.621 17.3828C45.0785 17.8582 45.7038 18.1358 46.3633 18.1562C46.6174 18.1592 46.8691 18.1072 47.1011 18.0036C47.3331 17.9 47.5399 17.7474 47.7073 17.5562H47.7493V17.9222C47.7811 18.1158 47.769 18.3142 47.7138 18.5025C47.6586 18.6908 47.5617 18.8643 47.4303 19.0101C47.2989 19.1559 47.1364 19.2702 46.9548 19.3447C46.7732 19.4191 46.5772 19.4518 46.3813 19.4402C46.1013 19.4344 45.8295 19.3451 45.6007 19.1836C45.3719 19.0222 45.1965 18.796 45.0973 18.5342L44.1493 18.9422C44.3347 19.389 44.6487 19.7707 45.0515 20.0389C45.4542 20.307 45.9275 20.4494 46.4113 20.4482C47.7253 20.4482 48.8113 19.6742 48.8113 17.7902V13.2062H47.7493V13.6262ZM46.4653 17.1542C46.2698 17.1488 46.0775 17.1044 45.8995 17.0235C45.7215 16.9426 45.5615 16.8269 45.4289 16.6832C45.2964 16.5395 45.194 16.3706 45.1278 16.1867C45.0615 16.0027 45.0328 15.8074 45.0433 15.6122C45.0328 15.4163 45.0614 15.2204 45.1275 15.0357C45.1936 14.8511 45.2959 14.6815 45.4283 14.5368C45.5606 14.3922 45.7205 14.2753 45.8986 14.1931C46.0766 14.1109 46.2693 14.0651 46.4653 14.0582C46.6577 14.068 46.8462 14.1163 47.0197 14.2003C47.1931 14.2843 47.3479 14.4022 47.4749 14.5472C47.6019 14.6921 47.6985 14.861 47.7591 15.0439C47.8196 15.2269 47.8428 15.4201 47.8273 15.6122C47.8428 15.8041 47.8193 15.9972 47.7583 16.1798C47.6973 16.3625 47.5999 16.5309 47.4721 16.6749C47.3444 16.819 47.1887 16.9357 47.0147 17.018C46.8406 17.1004 46.6517 17.1467 46.4593 17.1542H46.4653ZM61.0873 10.5002H58.4053V18.0002H59.5213V15.1622H61.0873C61.7218 15.1783 62.3369 14.9424 62.798 14.5061C63.259 14.0698 63.5284 13.4686 63.5473 12.8342C63.53 12.1986 63.2613 11.5959 62.8001 11.1583C62.3388 10.7207 61.7228 10.484 61.0873 10.5002ZM61.1173 14.1002H59.5213V11.5202H61.1173C61.4616 11.5186 61.7925 11.6534 62.0376 11.8951C62.2827 12.1369 62.4221 12.4659 62.4253 12.8102C62.4253 13.1571 62.2875 13.4898 62.0422 13.7351C61.7969 13.9804 61.4642 14.1182 61.1173 14.1182V14.1002ZM68.0353 13.0202C67.6263 12.9971 67.2194 13.0937 66.8646 13.2983C66.5097 13.503 66.2222 13.8066 66.0373 14.1722L67.0333 14.5862C67.1309 14.4047 67.2795 14.2557 67.4607 14.1576C67.642 14.0595 67.8479 14.0166 68.0533 14.0342C68.1959 14.0167 68.3405 14.028 68.4786 14.0674C68.6167 14.1068 68.7455 14.1735 68.8574 14.2636C68.9693 14.3536 69.062 14.4652 69.13 14.5918C69.198 14.7183 69.2399 14.8571 69.2533 15.0002V15.1202C68.8945 14.931 68.4949 14.8321 68.0893 14.8322C67.0153 14.8322 65.9233 15.4322 65.9233 16.5182C65.9586 16.9735 66.1716 17.3967 66.5162 17.6964C66.8608 17.9961 67.3094 18.1483 67.7653 18.1202C68.0469 18.1364 68.3278 18.0771 68.5788 17.9484C68.8299 17.8197 69.042 17.6263 69.1933 17.3882H69.2293V17.9882H70.3093V15.1202C70.3093 13.7822 69.3493 13.0382 68.0353 13.0382V13.0202ZM67.8973 17.1302C67.5313 17.1302 67.0213 16.9502 67.0213 16.4942C67.0213 15.8942 67.6573 15.6962 68.2213 15.6962C68.578 15.6843 68.9311 15.7715 69.2413 15.9482C69.2031 16.2781 69.0451 16.5825 68.7974 16.8037C68.5497 17.0248 68.2294 17.1474 67.8973 17.1482V17.1302ZM74.2513 13.1882L72.9493 16.4582L71.6173 13.2062H70.4173L72.4153 17.7482L71.2753 20.2802H72.4753L75.5533 13.2062L74.2513 13.1882ZM64.1653 17.9882H65.2813V10.5002H64.1653V17.9882Z"
                fill="white"
            />
            <path
                d="M6.26456 4.52393C6.06537 4.75924 5.96439 5.06218 5.98255 5.36993V18.6359C5.96439 18.9437 6.06537 19.2466 6.26456 19.4819L6.30656 19.5239L13.7406 12.1199V11.9459L6.30656 4.48193L6.26456 4.52393Z"
                fill="url(#paint0_linear_185_58818)"
            />
            <path
                d="M16.2163 14.568L13.7383 12.12V11.946L16.2163 9.46802H16.2703L19.2103 11.136C20.0443 11.616 20.0443 12.39 19.2103 12.87L16.2703 14.52L16.2163 14.568Z"
                fill="url(#paint1_linear_185_58818)"
            />
            <path
                d="M16.2736 14.5198L13.7416 11.9878L6.26562 19.4818C6.4363 19.6334 6.65489 19.7201 6.88308 19.7267C7.11127 19.7332 7.33449 19.6593 7.51363 19.5178L16.2736 14.5378"
                fill="url(#paint2_linear_185_58818)"
            />
            <path
                d="M16.2736 9.46808L7.51363 4.48808C7.33449 4.34657 7.11127 4.27263 6.88308 4.27921C6.65489 4.2858 6.4363 4.37248 6.26562 4.52408L13.7416 12.0061L16.2736 9.46808Z"
                fill="url(#paint3_linear_185_58818)"
            />
            <path
                opacity="0.2"
                d="M16.2175 14.4839L7.51153 19.4279C7.33792 19.5565 7.12758 19.6259 6.91153 19.6259C6.69548 19.6259 6.48514 19.5565 6.31153 19.4279L6.26953 19.4759L6.31153 19.5179C6.48514 19.6465 6.69548 19.7159 6.91153 19.7159C7.12758 19.7159 7.33792 19.6465 7.51153 19.5179L16.2715 14.5379L16.2175 14.4839Z"
                fill="#353F47"
            />
            <path
                opacity="0.12"
                d="M6.26456 19.392C6.06684 19.1582 5.96595 18.8577 5.98255 18.552V18.636C5.96439 18.9438 6.06537 19.2467 6.26456 19.482L6.30655 19.434L6.26456 19.392Z"
                fill="#353F47"
            />
            <path
                opacity="0.12"
                d="M19.2109 12.7801L16.2109 14.4841L16.2649 14.5381L19.2049 12.8701C19.3725 12.7921 19.5163 12.671 19.6217 12.5192C19.7271 12.3674 19.7904 12.1903 19.8049 12.0061C19.7723 12.1722 19.7017 12.3284 19.5986 12.4627C19.4956 12.597 19.3629 12.7056 19.2109 12.7801Z"
                fill="#353F47"
            />
            <path
                opacity="0.25"
                d="M7.51047 4.57796L19.2105 11.226C19.3643 11.3003 19.4986 11.4096 19.6027 11.545C19.7069 11.6804 19.778 11.8382 19.8105 12.006C19.7975 11.8205 19.735 11.6419 19.6295 11.4889C19.5239 11.3358 19.3792 11.214 19.2105 11.136L7.51047 4.48796C6.67047 4.01396 5.98047 4.40996 5.98047 5.36996V5.45396C5.98047 4.49396 6.67047 4.09796 7.51047 4.57796Z"
                fill="white"
            />
            <path
                d="M54.9922 7.55365V3.95365H56.2942C56.5651 3.95139 56.8268 4.0522 57.0262 4.23565C57.125 4.32348 57.2036 4.43176 57.2564 4.55298C57.3093 4.67419 57.3351 4.80545 57.3322 4.93765C57.3354 5.09764 57.2893 5.25474 57.2002 5.38765C57.112 5.51827 56.9895 5.62206 56.8462 5.68765C57.0202 5.74526 57.1729 5.85399 57.2842 5.99965C57.3961 6.14583 57.4553 6.32557 57.4522 6.50965C57.4553 6.64886 57.4279 6.78706 57.3719 6.91455C57.316 7.04204 57.2328 7.15574 57.1282 7.24765C56.9177 7.43714 56.6434 7.54002 56.3602 7.53565L54.9922 7.55365ZM55.4542 5.50165H56.2942C56.3725 5.50413 56.4505 5.4899 56.5229 5.4599C56.5953 5.4299 56.6605 5.38481 56.7142 5.32765C56.8088 5.22381 56.864 5.09003 56.8702 4.94965C56.8679 4.80845 56.8121 4.67337 56.7142 4.57165C56.664 4.51494 56.602 4.46995 56.5326 4.43988C56.4631 4.40981 56.3879 4.39539 56.3122 4.39765H55.4542V5.50165ZM55.4542 7.11565H56.3842C56.465 7.11534 56.5449 7.09871 56.6192 7.06675C56.6934 7.03478 56.7604 6.98815 56.8162 6.92965C56.9198 6.819 56.9777 6.67323 56.9782 6.52165C56.976 6.36925 56.916 6.22338 56.8102 6.11365C56.7518 6.054 56.6816 6.00719 56.6042 5.97619C56.5267 5.9452 56.4436 5.93071 56.3602 5.93365H55.4542V7.11565Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
            />
            <path
                d="M52.5669 7.07385C52.3973 7.25217 52.1922 7.39291 51.9648 7.48696C51.7375 7.58102 51.4929 7.62629 51.2469 7.61985C51.0009 7.62629 50.7563 7.58102 50.5289 7.48696C50.3015 7.39291 50.0964 7.25217 49.9269 7.07385C49.7561 6.89958 49.6215 6.69321 49.5309 6.46665C49.4402 6.2401 49.3954 5.99783 49.3989 5.75385C49.3935 5.50781 49.4374 5.26318 49.5281 5.03441C49.6188 4.80563 49.7544 4.59734 49.9269 4.42185C50.0964 4.24353 50.3015 4.10279 50.5289 4.00873C50.7563 3.91468 51.0009 3.86941 51.2469 3.87585C51.4925 3.87196 51.7364 3.9184 51.9634 4.0123C52.1904 4.1062 52.3958 4.24558 52.5669 4.42185C52.7394 4.59734 52.875 4.80563 52.9657 5.03441C53.0564 5.26318 53.1003 5.50781 53.0949 5.75385C53.0984 5.99783 53.0535 6.2401 52.9629 6.46665C52.8723 6.69321 52.7377 6.89958 52.5669 7.07385ZM50.2689 6.77385C50.3954 6.90465 50.5476 7.00788 50.7159 7.07705C50.8842 7.14623 51.065 7.17987 51.2469 7.17585C51.4288 7.17987 51.6096 7.14623 51.7779 7.07705C51.9462 7.00788 52.0984 6.90465 52.2249 6.77385C52.358 6.63656 52.4621 6.47394 52.5312 6.29563C52.6002 6.11733 52.6328 5.92697 52.6269 5.73585C52.632 5.54573 52.599 5.35651 52.53 5.17929C52.461 5.00207 52.3572 4.84043 52.2249 4.70385C52.0984 4.57305 51.9462 4.46982 51.7779 4.40064C51.6096 4.33146 51.4288 4.29783 51.2469 4.30185C51.065 4.29783 50.8842 4.33146 50.7159 4.40064C50.5476 4.46982 50.3954 4.57305 50.2689 4.70385C50.1365 4.84355 50.0337 5.00857 49.9666 5.18901C49.8996 5.36945 49.8698 5.56158 49.8789 5.75385C49.8714 5.94413 49.902 6.13399 49.969 6.31225C50.036 6.49051 50.138 6.65357 50.2689 6.79185V6.77385Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
            />
            <path
                d="M46.0742 7.55361V3.95361H46.5362V5.50161H48.3362V3.95361H48.7982V7.55361H48.3362V5.93361H46.5362V7.55361H46.0742Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
            />
            <path
                d="M42.6406 7.55361V3.95361H45.2446V7.55361H44.7826V4.39761H43.1026V7.55361H42.6406Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
            />
            <path
                d="M42.1216 3.95361L40.7596 6.99561C40.7036 7.17662 40.5927 7.3357 40.4421 7.45075C40.2916 7.5658 40.109 7.63111 39.9196 7.63761C39.7953 7.63366 39.6729 7.60512 39.5596 7.55361L39.6796 7.12761C39.7549 7.16959 39.8394 7.19226 39.9256 7.19361C40.0119 7.1998 40.0979 7.17881 40.1716 7.13361C40.246 7.07191 40.3021 6.99097 40.3336 6.89961L40.4656 6.61761L39.2656 3.95361H39.8116L40.6996 6.02361L41.5696 3.95361H42.1216Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
            />
            <path
                d="M37.9387 7.55361H37.4767V4.39761H36.4688V3.95361H38.9407V4.39761H37.9387V7.55361Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
            />
            <path
                d="M34.6386 7.63783C34.3913 7.64415 34.1455 7.59946 33.9163 7.50655C33.6871 7.41364 33.4796 7.27451 33.3065 7.09783C33.1284 6.92343 32.9884 6.7139 32.8954 6.48254C32.8024 6.25119 32.7586 6.00304 32.7665 5.75383C32.7594 5.50562 32.8037 5.25862 32.8966 5.02836C32.9895 4.79809 33.1291 4.58955 33.3065 4.41583C33.4796 4.23915 33.6871 4.10002 33.9163 4.00712C34.1455 3.91421 34.3913 3.86952 34.6386 3.87583C34.8904 3.87002 35.1404 3.92093 35.3699 4.02479C35.5994 4.12864 35.8027 4.2828 35.9646 4.47583L35.6406 4.78783C35.522 4.63738 35.3692 4.51748 35.1949 4.43815C35.0206 4.35882 34.8298 4.32237 34.6386 4.33183C34.4554 4.32786 34.2733 4.36088 34.1032 4.42893C33.9331 4.49697 33.7785 4.59863 33.6486 4.72783C33.5127 4.86337 33.4063 5.02555 33.336 5.20418C33.2658 5.38281 33.2333 5.57403 33.2405 5.76583C33.2384 5.95876 33.2762 6.15005 33.3516 6.32766C33.427 6.50527 33.5383 6.66535 33.6785 6.79783C33.8084 6.92703 33.9631 7.0287 34.1332 7.09674C34.3033 7.16478 34.4854 7.19781 34.6686 7.19383C34.8799 7.19514 35.0889 7.14891 35.28 7.05855C35.4711 6.9682 35.6394 6.83603 35.7726 6.67183L36.0966 6.99583C35.934 7.19462 35.7289 7.35453 35.4966 7.46383C35.228 7.58776 34.9342 7.64734 34.6386 7.63783Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
            />
            <path
                d="M31.7837 7.07378C31.6139 7.2518 31.4088 7.39234 31.1815 7.48637C30.9541 7.5804 30.7097 7.62585 30.4637 7.61978C30.2177 7.62622 29.9731 7.58095 29.7458 7.48689C29.5184 7.39284 29.3133 7.2521 29.1437 7.07378C28.9699 6.89767 28.8332 6.68856 28.7414 6.45877C28.6497 6.22898 28.6049 5.98315 28.6097 5.73578C28.6054 5.48937 28.6504 5.24458 28.7421 5.01583C28.8339 4.78708 28.9704 4.57898 29.1437 4.40378C29.3133 4.22546 29.5184 4.08472 29.7458 3.99067C29.9731 3.89661 30.2177 3.85134 30.4637 3.85778C30.7087 3.85181 30.9523 3.89733 31.1786 3.99138C31.405 4.08543 31.6091 4.22592 31.7777 4.40378C31.9511 4.57898 32.0876 4.78708 32.1793 5.01583C32.271 5.24458 32.316 5.48937 32.3117 5.73578C32.3176 5.98277 32.2739 6.22844 32.1832 6.45826C32.0926 6.68808 31.9567 6.89738 31.7837 7.07378ZM29.4857 6.77378C29.6118 6.90517 29.7639 7.00879 29.9323 7.07801C30.1007 7.14724 30.2817 7.18054 30.4637 7.17578C30.6456 7.17944 30.8263 7.14564 30.9945 7.07648C31.1628 7.00733 31.315 6.90429 31.4417 6.77378C31.5737 6.636 31.6768 6.47315 31.7448 6.29487C31.8128 6.11659 31.8444 5.92648 31.8377 5.73578C31.8439 5.54604 31.8121 5.35697 31.7441 5.17973C31.6761 5.00249 31.5733 4.84065 31.4417 4.70378C31.315 4.57327 31.1628 4.47023 30.9945 4.40108C30.8263 4.33192 30.6456 4.29812 30.4637 4.30178C30.2817 4.29703 30.1007 4.33032 29.9323 4.39955C29.7639 4.46877 29.6118 4.57239 29.4857 4.70378C29.3522 4.83955 29.2478 5.00106 29.1787 5.17847C29.1096 5.35588 29.0773 5.54549 29.0837 5.73578C29.0731 5.92961 29.1029 6.12353 29.171 6.30529C29.2392 6.48705 29.3443 6.6527 29.4797 6.79178L29.4857 6.77378Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
            />
            <path
                d="M25.0026 8.32165H24.5586V7.12165H24.9126C25.0833 6.93787 25.2123 6.71949 25.291 6.48135C25.3697 6.24322 25.3962 5.99093 25.3686 5.74165V3.94165H27.7686V7.10365H28.1706V8.30365H27.7326V7.55365H25.0026V8.32165ZM25.8306 5.73565C25.8586 6.21964 25.7394 6.70075 25.4886 7.11565H27.2886V4.39765H25.8126L25.8306 5.73565Z"
                fill="white"
                stroke="white"
                strokeWidth="0.2"
                strokeMiterlimit="10"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_185_58818"
                    x1="13.0806"
                    y1="5.22593"
                    x2="3.01255"
                    y2="15.2999"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#00A0FF" />
                    <stop offset="0.01" stopColor="#00A1FF" />
                    <stop offset="0.26" stopColor="#00BEFF" />
                    <stop offset="0.51" stopColor="#00D2FF" />
                    <stop offset="0.76" stopColor="#00DFFF" />
                    <stop offset="1" stopColor="#00E3FF" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_185_58818"
                    x1="20.3023"
                    y1="12.006"
                    x2="5.78228"
                    y2="12.006"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFE000" />
                    <stop offset="0.41" stopColor="#FFBD00" />
                    <stop offset="0.78" stopColor="#FFA500" />
                    <stop offset="1" stopColor="#FF9C00" />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_185_58818"
                    x1="14.8996"
                    y1="13.3798"
                    x2="1.24363"
                    y2="27.0358"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF3A44" />
                    <stop offset="1" stopColor="#C31162" />
                </linearGradient>
                <linearGradient
                    id="paint3_linear_185_58818"
                    x1="4.38162"
                    y1="0.108078"
                    x2="10.4776"
                    y2="6.20408"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#32A071" />
                    <stop offset="0.07" stopColor="#2DA771" />
                    <stop offset="0.48" stopColor="#15CF74" />
                    <stop offset="0.8" stopColor="#06E775" />
                    <stop offset="1" stopColor="#00F076" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default GooglePlayRu;