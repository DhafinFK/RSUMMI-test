import { getTrialList } from "../../src/services/trialService";

describe("get Trial List service", () => {
    it("should return list of multiple trial", () => {
        const lst = getTrialList();
        expect(lst).toEqual([
            {id: 1, name: "Trial1"},
            {id: 2, name: "Trial2"},
            {id: 3, name: "Trial3"}
        ]);
    });
});
