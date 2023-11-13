export function afasf() {
    const length = 2.58;
    const width = 2.16;
    const height = 2.8
    const PerimetrPola = (length * 2) + (width * 2);

    const lengthShvov = length/0.625*width;
    const lengthShvov1 = length/1.25*width;
    const lengthShvov2 = PerimetrPola/1.25*height;

    const paroizolaciaShvovCount =  (PerimetrPola * 2) + (height * 4) + lengthShvov + lengthShvov1 + lengthShvov2;
    const paroizolaciaPrice = paroizolaciaShvovCount * 130;
}