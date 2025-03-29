import useGetMockApi from "../../hooks/useGetMockApi";
import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";

// Mocking axios
jest.mock("axios");

describe("useGetMockApi", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useGetMockApi());
    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it("should fetch data successfully", async () => {
    const mockData = { fact: "Cats are great!" };
    axios.get.mockResolvedValueOnce({ data: mockData });

    const { result } = renderHook(() => useGetMockApi());
    await waitFor(() => expect(result.current.loading).toBe(false));

    console.log(
      "should fetch data successfully result.current.data",
      result.current.data
    );

    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeNull();
  });

  it("should handle error", async () => {
    const mockError = new Error("Network Error");
    axios.get.mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useGetMockApi());
    await waitFor(() => expect(result.current.loading).toBe(false));

    console.log(
      "should handle error result.current.error",
      result.current.error
    );

    expect(result.current.data).toBeNull();
    expect(result.current.error).toBe(mockError.message);
  });
});
