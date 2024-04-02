import React, { ReactNode } from 'react';
import * as S from './styles';
import { RusFlag } from './components/RusFlag';
import { KazFlag } from './components/KazFlag';
import { BlrFlag } from './components/BlrFlag';
import { AzeFlag } from './components/AzeFlag';
import { ArmFlag } from './components/ArmFlag';
import { KgzFlag } from './components/KgzFlag';
import { MdaFlag } from './components/MdaFlag';
import { TjkFlag } from './components/TjkFlag';
import { UzbFlag } from './components/UzbFlag';
import { ChnFlag } from './components/ChnFlag';
import { EngFlag } from './components/EngFlag';
import { EspFlag } from './components/EspFlag';

const flagKeys = [
    'RUS',
    'BLR',
    'KAZ',
    'AZE',
    'ARM',
    'KGZ',
    'MDA',
    'TJK',
    'UZB',
    'CHN',
    'ENG',
    'ESP',
] as const;

export type TFlagKey = (typeof flagKeys)[number];

const map: Record<TFlagKey, ReactNode> = {
    RUS: <RusFlag />,
    KAZ: <KazFlag />,
    BLR: <BlrFlag />,
    AZE: <AzeFlag />,
    ARM: <ArmFlag />,
    KGZ: <KgzFlag />,
    MDA: <MdaFlag />,
    TJK: <TjkFlag />,
    UZB: <UzbFlag />,
    CHN: <ChnFlag />,
    ENG: <EngFlag />,
    ESP: <EspFlag />,
};

export type TProps = {
    flag: TFlagKey;
    width: number;
    height: number;
};

export const Flag = ({ flag, width, height }: TProps) => {
    return (
        <S.FlagWrapper $width={width} $height={height}>
            {map[flag]}
        </S.FlagWrapper>
    );
};

Flag.flags = flagKeys;
