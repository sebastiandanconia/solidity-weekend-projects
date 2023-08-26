import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";


/*
function myTestFunction() {
    console.log("Good. You're in class.");
}

myTestFunction();
*/

// "describe" is a group of tests; "it" is a single test case.

describe("Test", () => {
    it("Should test something", () => {
        console.log("Hello World");
        console.log(2 > 1);
    })
    it("Should print the correct output", async function () {
        const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
        const helloWorldContract = await helloWorldFactory.deploy();
        await helloWorldContract.waitForDeployment();
        const text = await helloWorldContract.helloWorld();
        expect(text).to.eq("Hello World!");
    })

    it("Should set owner to deployer account", async function () {
        const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
        const helloWorldContract = await helloWorldFactory.deploy();
        await helloWorldContract.waitForDeployment();
        const owner = await helloWorldContract.owner();
        const accounts = await ethers.getSigners();
        expect(owner).to.eq(accounts[0].address);
    })
});