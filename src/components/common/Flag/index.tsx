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
import { AreFlag } from './components/AreFlag';
import { AusFlag } from './components/AusFlag';
import { DeuFlag } from './components/DeuFlag';
import { EcuFlag } from './components/EcuFlag';
import { FraFlag } from './components/FraFlag';
import { IndFlag } from './components/IndFlag';
import { SauFlag } from './components/SauFlag';
import { SrbFlag } from './components/SrbFlag';
import { SvkFlag } from './components/SvkFlag';
import { SvnFlag } from './components/SvnFlag';
import { TurFlag } from './components/TurFlag';
import { UnknownFlag } from './components/UnknownFlag';

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
    'ARE',
    'AUS',
    'DEU',
    'ECU',
    'FRA',
    'IND',
    'SAU',
    'SRB',
    'SVK',
    'SVN',
    'TUR',
    'UNKNOWN',
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
    ARE: <AreFlag />,
    AUS: <AusFlag />,
    DEU: <DeuFlag />,
    ECU: <EcuFlag />,
    FRA: <FraFlag />,
    IND: <IndFlag />,
    SAU: <SauFlag />,
    SRB: <SrbFlag />,
    SVK: <SvkFlag />,
    SVN: <SvnFlag />,
    TUR: <TurFlag />,
    UNKNOWN: <UnknownFlag />,
};

export type TProps = {
    flag: TFlagKey;
    isSmall: boolean;
};

export const Flag = ({ flag, isSmall }: TProps) => {
    return <S.FlagWrapper $isSmall={isSmall}>{map[flag]}</S.FlagWrapper>;
};

Flag.flags = flagKeys;
