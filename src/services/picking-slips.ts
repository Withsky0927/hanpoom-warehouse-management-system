import { pickingSlipsRepository } from '../repositories';

import { Enums } from '../constant';

const getPickingSlips = async (filter: {
  page: number;
  limit: number;
  status: string | null;
}): Promise<any | Error> => {
  try {
    const { page, limit, status } = filter;

    const offset = (page - 1) * limit + 1;

    let result;

    const pagination = {
      offset,
      limit,
    };

    switch (status) {
      case Enums.SlipStatus.PRINTED:
        result =
          await pickingSlipsRepository.getPrintedPickingSlips(pagination);
        break;
      case Enums.SlipStatus.NOT_PRINTED:
        result =
          await pickingSlipsRepository.getNotPrintedPickingSlips(pagination);
        break;
      case Enums.SlipStatus.HELD:
        result =
          await pickingSlipsRepository.getNotPrintedPickingSlips(pagination);
        break;
      default:
        result = await pickingSlipsRepository.getAllPickingSlips(pagination);
    }

    return result;
  } catch (err) {
    console.log(err);
    throw new Error(String(err));
  }
};

export default { getPickingSlips };
