const mockFrom = jest.fn();
const mockSelect = jest.fn();
const mockInsert = jest.fn();
const mockUpdate = jest.fn();
const mockLike = jest.fn();
const mockEq = jest.fn();

const mockSupabase = (data?: any) => {
  mockEq.mockReturnValue({ data });
  mockLike.mockReturnValue({ data });

  return {
    from: mockFrom.mockImplementation(() => {
      return {
        update: mockUpdate.mockImplementation(() => {
          return { eq: mockEq };
        }),
        insert: mockInsert,
        select: mockSelect.mockImplementation(() => {
          return { eq: mockEq, like: mockLike };
        })
      };
    })
  };
};

export {
  mockSupabase,
  mockFrom,
  mockLike,
  mockSelect,
  mockInsert,
  mockEq,
  mockUpdate
};
