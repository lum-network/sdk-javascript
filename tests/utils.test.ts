import { LumConstants, LumUtils } from '../src';

describe('Utils', () => {
    it('Unit conversion should output consistent results', () => {
        expect(LumUtils.convertUnit({ denom: LumConstants.MicroLumDenom, amount: '23456789' }, LumConstants.MicroLumDenom)).toEqual('23456789');
        expect(LumUtils.convertUnit({ denom: LumConstants.LumDenom, amount: '23.456789' }, LumConstants.LumDenom)).toEqual('23.456789');
        expect(LumUtils.convertUnit({ denom: LumConstants.LumDenom, amount: '23.456789' }, LumConstants.MicroLumDenom)).toEqual('23456789');
        expect(LumUtils.convertUnit({ denom: LumConstants.LumDenom, amount: '23456789' }, LumConstants.MicroLumDenom)).toEqual('23456789000000');
        expect(LumUtils.convertUnit({ denom: LumConstants.MicroLumDenom, amount: '123456789000' }, LumConstants.LumDenom)).toEqual('123456.789');
        expect(LumUtils.convertUnit({ denom: LumConstants.MicroLumDenom, amount: '123456789111' }, LumConstants.LumDenom)).toEqual('123456.789111');
        expect(LumUtils.convertUnit({ denom: LumConstants.MicroLumDenom, amount: '123456' }, LumConstants.LumDenom)).toEqual('0.123456');
        expect(LumUtils.convertUnit({ denom: LumConstants.MicroLumDenom, amount: '23456' }, LumConstants.LumDenom)).toEqual('0.023456');
        expect(LumUtils.convertUnit({ denom: LumConstants.LumDenom, amount: '0.000001' }, LumConstants.MicroLumDenom)).toEqual('1');
        expect(LumUtils.convertUnit({ denom: LumConstants.MicroLumDenom, amount: '1' }, LumConstants.LumDenom)).toEqual('0.000001');
    });
});
