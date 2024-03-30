import { db } from '../config';

const getAllPickingSlips = async (filter: {
  offset: number;
  limit: number;
}) => {
  try {
    return await db
      .select(
        'ps.order_id',
        'psi.picking_slip_id',
        db.raw(`
            (
                SELECT
                    CASE 
                        WHEN COUNT(psi1.is_pre_order) > 0 THEN 'true'
                        ELSE 'false'
                    END
                FROM picking_slips AS ps1
                INNER JOIN picking_slip_dates as psd1 ON ps1.id = psd1.picking_slip_id
                INNER JOIN picking_slip_items as psi1 ON ps1.id = psi1.picking_slip_id
                WHERE psi1.picking_slip_id = ps.id
            ) as has_pre_order_item
        `)
      )
      .from('picking_slips as ps')
      .innerJoin('picking_slip_dates as psd', 'ps.id', 'psd.picking_slip_id')
      .innerJoin('picking_slip_items as psi', 'ps.id', 'psi.picking_slip_id')
      .orderBy('ps.created_at', 'DESC')
      .offset(filter.offset)
      .limit(filter.limit);
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

const getPrintedPickingSlips = async (filter: {
  offset: number;
  limit: number;
}) => {
  try {
    return await db
      .select(
        'ps.order_id',
        'psd.picking_slip_id',
        db.raw(`
            (
                SELECT
                    CASE 
                        WHEN COUNT(psi1.is_pre_order) > 0 THEN 'true'
                        ELSE 'false'
                    END
                FROM picking_slips AS ps1
                INNER JOIN picking_slip_dates as psd1 ON ps1.id = psd1.picking_slip_id
                INNER JOIN picking_slip_items as psi1 ON ps1.id = psi1.picking_slip_id
                WHERE psi1.picking_slip_id = ps.id
            ) as has_pre_order_item
        `)
      )
      .from('picking_slips as ps')
      .innerJoin('picking_slip_dates as psd', 'ps.id', 'psd.picking_slip_id')
      .innerJoin('picking_slip_items as psi', 'ps.id', 'psi.picking_slip_id')
      .whereNotNull('psd.printed_at')
      .whereNull('psd.inspected_at')
      .whereNull('psd.shipped_at')
      .whereNull('psd.held_at')
      .orderBy('ps.created_at', 'DESC')
      .offset(filter.offset)
      .limit(filter.limit);
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

const getNotPrintedPickingSlips = async (filter: {
  offset: number;
  limit: number;
}) => {
  try {
    return await db
      .select(
        'ps.order_id',
        'psd.picking_slip_id',
        db.raw(`
          (
              SELECT
                  CASE 
                      WHEN COUNT(psi1.is_pre_order) > 0 THEN 'true' 
                      ELSE 'false'
                  END
              FROM picking_slips AS ps1
              INNER JOIN picking_slip_dates as psd1 ON ps1.id = psd1.picking_slip_id
              INNER JOIN picking_slip_items as psi1 ON ps1.id = psi1.picking_slip_id
              WHERE psi1.picking_slip_id = ps.id
          ) AS has_pre_order_item
      `)
      )
      .from('picking_slips as ps')
      .innerJoin('picking_slip_dates as psd', 'ps.id', 'psd.picking_slip_id')
      .innerJoin('picking_slip_items as psi', 'ps.id', 'psi.picking_slip_id')
      .whereNull('psd.printed_at')
      .whereNull('psd.inspected_at')
      .whereNull('psd.shipped_at')
      .whereNull('psd.held_at')
      .orderBy('ps.created_at', 'DESC')
      .offset(filter.offset)
      .limit(filter.limit);
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

const getHeldPickingSlips = async (filter: {
  offset: number;
  limit: number;
  status: string;
}) => {
  try {
    return await db
      .select(
        'ps.order_id',
        'psd.picking_slip_id',
        db.raw(`
        (
            SELECT
                CASE 
                    WHEN COUNT(psi1.is_pre_order) > 0 THEN true
                    ELSE false
                END
            FROM picking_slips AS ps1
            INNER JOIN picking_slip_dates as psd1 ON ps1.id = psd1.picking_slip_id
            INNER JOIN picking_slip_items as psi1 ON ps1.id = psi1.picking_slip_id
            WHERE psi1.picking_slip_id = ps.id
        ) AS has_pre_order_item
    `)
      )
      .from('picking_slips as ps')
      .innerJoin('picking_slip_dates as psd', 'ps.id', 'psd.picking_slip_id')
      .innerJoin('picking_slip_items as psi', 'ps.id', 'psi.picking_slip_id')
      .whereNotNull('psd.held_at')
      .orderBy('ps.created_at', 'DESC')
      .offset(filter.offset)
      .limit(filter.limit);
  } catch (error) {
    console.log(error);
    throw new Error(String(error));
  }
};

export default {
  getAllPickingSlips,
  getPrintedPickingSlips,
  getNotPrintedPickingSlips,
  getHeldPickingSlips,
};
